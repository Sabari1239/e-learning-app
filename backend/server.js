const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/authDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('🚀 Connected to MongoDB'))
  .catch(err => console.error('❌ Failed to connect to MongoDB', err));

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
    score: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);

const progressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    language: String,
    completedTopics: [String],
    currentTopic: String,
    practiceExercises: [{
        topicId: String,
        completed: Boolean,
        score: Number
    }],
    lastAccessed: { type: Date, default: Date.now }
});

const Progress = mongoose.model('Progress', progressSchema);

const scoreSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    score: Number,
    totalQuestions: Number,
    category: String,
    timestamp: { type: Date, default: Date.now }
});

const Score = mongoose.model('Score', scoreSchema);

// User Registration
app.post('/api/register', async (req, res) => {
    console.log('📝 New registration request received');
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({ name, email, phone, password: hashedPassword });
        await user.save();
        console.log('✅ User registered successfully:', email);
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('❌ Registration error:', error);
        res.status(400).json({ error: 'Error registering user' });
    }
});

// User Login
app.post('/api/login', async (req, res) => {
    console.log('🔐 Login attempt received');
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('❌ User not found:', email);
            return res.status(404).json({ error: 'User not found' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('❌ Invalid password for user:', email);
            return res.status(400).json({ error: 'Invalid password' });
        }
        
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
        console.log('✅ Login successful:', email);
        res.json({ 
            message: 'Login successful', 
            token,
            userId: user._id,
            userName: user.name
        });
    } catch (error) {
        console.error('❌ Login error:', error);
        res.status(500).json({ error: 'Login error' });
    }
});

// Get Latest Progress
app.get('/api/progress/latest/:userId', async (req, res) => {
    console.log('📚 Fetching latest progress');
    const { userId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid userId format' });
    }

    try {
        const progress = await Progress.findOne({ 
            userId: new mongoose.Types.ObjectId(userId) 
        })
        .sort({ lastAccessed: -1 })
        .limit(1);
            
        if (progress) {
            const completionPercentage = Math.round(
                (progress.completedTopics.length / 
                (progress.completedTopics.length + 1)) * 100
            );
            
            res.json({
                currentTopic: progress.currentTopic,
                language: progress.language,
                completionPercentage,
                lastAccessed: progress.lastAccessed
            });
        } else {
            res.json(null);
        }
    } catch (error) {
        console.error('❌ Error fetching latest progress:', error);
        res.status(400).json({ error: 'Error fetching latest progress' });
    }
});

// Get Progress by Language
app.get('/api/progress/:userId/:language', async (req, res) => {
    console.log('📊 Fetching user progress');
    const { userId, language } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid userId format' });
    }

    try {
        const progress = await Progress.findOne({ 
            userId: new mongoose.Types.ObjectId(userId), 
            language 
        });
        console.log('✅ Progress fetched successfully');
        res.json(progress || { completedTopics: [], currentTopic: null });
    } catch (error) {
        console.error('❌ Error fetching progress:', error);
        res.status(400).json({ error: 'Error fetching progress' });
    }
});

// Update Progress
app.post('/api/progress', async (req, res) => {
    console.log('📈 Progress update received');
    const { userId, language, topic, exerciseResult } = req.body;
    try {
        let progress = await Progress.findOne({ 
            userId: new mongoose.Types.ObjectId(userId), 
            language 
        });
        
        if (!progress) {
            progress = new Progress({
                userId: new mongoose.Types.ObjectId(userId),
                language,
                completedTopics: [],
                currentTopic: topic
            });
        }
        
        if (exerciseResult?.completed) {
            if (!progress.completedTopics.includes(topic)) {
                progress.completedTopics.push(topic);
            }
            progress.practiceExercises.push({
                topicId: topic,
                completed: true,
                score: exerciseResult.score
            });
        }
        
        progress.currentTopic = topic;
        progress.lastAccessed = new Date();
        await progress.save();
        
        console.log('✅ Progress updated successfully');
        res.json(progress);
    } catch (error) {
        console.error('❌ Error updating progress:', error);
        res.status(400).json({ error: 'Error updating progress' });
    }
});

// Get Leaderboard Scores
app.get('/api/scores', async (req, res) => {
    console.log('📊 Fetching leaderboard scores');
    try {
        const scores = await Score.find()
            .populate('userId', 'name')
            .sort({ score: -1 })
            .limit(10);
        
        const formattedScores = scores.map(score => ({
            name: score.userId?.name || 'Anonymous',
            score: score.score,
            date: score.timestamp
        }));
        
        console.log('✅ Leaderboard scores fetched successfully');
        res.json(formattedScores);
    } catch (error) {
        console.error('❌ Error fetching scores:', error);
        res.status(500).json({ error: 'Error fetching scores' });
    }
});

// Save Score
app.post('/api/scores', async (req, res) => {
    console.log('🎯 New score submission received');
    const { userId, score, totalQuestions, category } = req.body;
    try {
        const newScore = new Score({
            userId: new mongoose.Types.ObjectId(userId),
            score,
            totalQuestions,
            category,
            timestamp: new Date()
        });
        await newScore.save();
        console.log('✅ Score saved successfully');
        res.status(201).json(newScore);
    } catch (error) {
        console.error('❌ Error saving score:', error);
        res.status(400).json({ error: 'Error saving score' });
    }
});

app.get('/api/user/:userId', async (req, res) => {
    console.log('👤 Fetching user profile data');
    const { userId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        console.log('❌ Invalid userId format received');
        return res.status(400).json({ error: 'Invalid userId format' });
    }

    try {
        const user = await User.findById(userId);
        const progress = await Progress.find({ userId });
        
        const completedCourses = progress.filter(p => 
            p.completedTopics.length > 0
        );

        console.log('✅ User data fetched successfully');
        res.json({
            user,
            progress,
            completedCourses
        });
    } catch (error) {
        console.error('❌ Error fetching user data:', error);
        res.status(400).json({ error: 'Error fetching user data' });
    }
});

app.put('/api/user/:userId', async (req, res) => {
    console.log('✏️ Updating user profile');
    const { userId } = req.params;
    const { name, email, phone, description } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        console.log('❌ Invalid userId format received');
        return res.status(400).json({ error: 'Invalid userId format' });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, email, phone, description },
            { new: true }
        );
        
        console.log('✅ User profile updated successfully');
        res.json(updatedUser);
    } catch (error) {
        console.error('❌ Error updating user:', error);
        res.status(400).json({ error: 'Error updating user data' });
    }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
