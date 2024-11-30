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

// Schema Definitions
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
    score: { type: Number, default: 0 },
    role: { type: String, default: 'user' }
});

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

const scoreSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    score: Number,
    totalQuestions: Number,
    category: String,
    timestamp: { type: Date, default: Date.now },
    isPartial: { type: Boolean, default: false }
});

const contentSchema = new mongoose.Schema({
    language: String,
    title: String,
    content: String,
    code: String,
    exercises: [{
        question: String,
        answer: String
    }],
    createdAt: { type: Date, default: Date.now }
});

const topicSchema = new mongoose.Schema({
    key: String,
    content: String,
    syntax: String,
    questions: [String],
    practiceAnswer: String,
    createdAt: { type: Date, default: Date.now }
});

// Models
const User = mongoose.model('User', userSchema);
const Progress = mongoose.model('Progress', progressSchema);
const Score = mongoose.model('Score', scoreSchema);
const Content = mongoose.model('Content', contentSchema);
const Topic = mongoose.model('Topic', topicSchema);

// Admin Routes
app.get('/api/admin/users', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        const usersWithDetails = await Promise.all(users.map(async (user) => {
            const progress = await Progress.find({ userId: user._id });
            const scores = await Score.find({ userId: user._id });
            
            return {
                ...user.toObject(),
                progress: calculateUserProgress(progress),
                lastActive: progress.length > 0 
                    ? Math.max(...progress.map(p => new Date(p.lastAccessed)))
                    : null,
                score: scores.length > 0 
                    ? Math.max(...scores.map(s => s.score))
                    : 0
            };
        }));
        
        res.json(usersWithDetails);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

app.post('/api/admin/content', async (req, res) => {
    const { language, title, content, code, exercises } = req.body;
    try {
        const newContent = new Content({
            language,
            title,
            content,
            code,
            exercises
        });
        await newContent.save();

        const topicKey = title;
        const newTopic = new Topic({
            key: topicKey,
            content: content,
            syntax: code,
            questions: exercises.map(ex => ex.question),
            practiceAnswer: exercises[0].answer
        });
        await newTopic.save();

        const allTopics = await Topic.find();
        
        res.status(201).json({ 
            content: newContent,
            topic: newTopic,
            allTopics: allTopics
        });
    } catch (error) {
        res.status(500).json({ error: 'Error adding content' });
    }
});

// Topics Routes
app.get('/api/topics/all', async (req, res) => {
    try {
        const topics = await Topic.find().sort({ createdAt: -1 });
        const formattedTopics = topics.reduce((acc, topic) => ({
            ...acc,
            [topic.key]: {
                content: topic.content,
                syntax: topic.syntax,
                questions: topic.questions,
                practiceAnswer: topic.practiceAnswer
            }
        }), {});
        res.json(formattedTopics);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching topics' });
    }
});

// User Registration
app.post('/api/register', async (req, res) => {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({ name, email, phone, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(400).json({ error: 'Error registering user' });
    }
});

// User Login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid password' });
        }
        
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
        res.json({ 
            message: 'Login successful', 
            token,
            userId: user._id,
            userName: user.name,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ error: 'Login error' });
    }
});

// Progress Routes
app.get('/api/progress/latest/:userId', async (req, res) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid userId format' });
    }

    try {
        const progress = await Progress.findOne({ userId: new mongoose.Types.ObjectId(userId) })
            .sort({ lastAccessed: -1 })
            .limit(1);
            
        if (progress) {
            const completionPercentage = Math.round(
                (progress.completedTopics.length / (progress.completedTopics.length + 1)) * 100
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
        res.status(400).json({ error: 'Error fetching progress' });
    }
});

app.get('/api/progress/:userId/:language', async (req, res) => {
    const { userId, language } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid userId format' });
    }

    try {
        const progress = await Progress.findOne({ 
            userId: new mongoose.Types.ObjectId(userId), 
            language 
        });
        res.json(progress || { completedTopics: [], currentTopic: null });
    } catch (error) {
        res.status(400).json({ error: 'Error fetching progress' });
    }
});

app.post('/api/progress', async (req, res) => {
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
        res.json(progress);
    } catch (error) {
        res.status(400).json({ error: 'Error updating progress' });
    }
});

// Score Routes
app.post('/api/scores', async (req, res) => {
    const { userId, score, totalQuestions, category } = req.body;
    if (totalQuestions <= 0) {
        return res.status(400).json({ error: 'Must complete at least one question' });
    }

    try {
        const user = await User.findById(userId);
        if (user) {
            const weightedScore = (score * totalQuestions) / 100;
            user.score = Math.max(user.score, weightedScore);
            await user.save();
        }

        const newScore = new Score({
            userId: new mongoose.Types.ObjectId(userId),
            score,
            totalQuestions,
            category,
            isPartial: totalQuestions < 6
        });
        await newScore.save();
        
        res.status(201).json({
            score: newScore,
            userTotalScore: user?.score,
            isPartial: totalQuestions < 6
        });
    } catch (error) {
        res.status(400).json({ error: 'Error saving score' });
    }
});

app.get('/api/scores', async (req, res) => {
    try {
        const scores = await Score.find()
            .populate('userId', 'name')
            .sort({ score: -1 })
            .limit(10);
        
        const formattedScores = scores.map(score => ({
            name: score.userId?.name || 'Anonymous',
            score: score.score,
            date: score.timestamp,
            isPartial: score.isPartial
        }));
        
        res.json(formattedScores);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching scores' });
    }
});

// User Profile Routes
app.get('/api/user/:userId', async (req, res) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid userId format' });
    }

    try {
        const user = await User.findById(userId);
        const progress = await Progress.find({ userId });
        const completedCourses = progress.filter(p => p.completedTopics.length > 0);

        res.json({
            user,
            progress,
            completedCourses
        });
    } catch (error) {
        res.status(400).json({ error: 'Error fetching user data' });
    }
});

app.put('/api/user/:userId', async (req, res) => {
    const { userId } = req.params;
    const { name, email, phone } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid userId format' });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, email, phone },
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: 'Error updating user data' });
    }
});

// Utility Functions
const calculateUserProgress = (progress) => {
    if (!progress.length) return 0;
    const totalTopics = progress.reduce((sum, p) => sum + p.completedTopics.length, 0);
    return Math.round((totalTopics / progress.length) * 100);
};

const PORT = process.env.PORT||5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
