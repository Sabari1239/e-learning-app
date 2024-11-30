import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VideoTutorials.css';

const VideoTutorials = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('Python');
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    const languages = ['Python', 'C++', 'Java', 'JavaScript', 'C'];
    const API_KEY = 'AIzaSyDDxXX3otXke4-3e-uTUgABKVeKlMP8XuQ';
    
    const fetchVideos = async (language) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: 'snippet',
                    q: `${language} programming tutorial for beginners`,
                    type: 'video',
                    maxResults: 12,
                    key: API_KEY
                }
            });
            setVideos(response.data.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
        setLoading(false);
    };
    
    useEffect(() => {
        fetchVideos(selectedLanguage);
    }, [selectedLanguage]);
    
    return (
        <div className="tutorials-container">
            <h1 className="tutorials-title">Programming Video Tutorials</h1>
            <div className="language-filter">
                {languages.map(lang => (
                    <button
                        key={lang}
                        className={`filter-btn ${selectedLanguage === lang ? 'active' : ''}`}
                        onClick={() => setSelectedLanguage(lang)}
                    >
                        {lang}
                    </button>
                ))}
            </div>
            {loading ? (
                <div className="loading-spinner">Loading...</div>
            ) : (
                <div className="video-grid">
                    {videos.map(video => (
                        <div key={video.id.videoId} className="video-card">
                            <div className="video-thumbnail">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                    title={video.snippet.title}
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                            <div className="video-info">
                                <h3 className="video-title">{video.snippet.title}</h3>
                                <p className="channel-name">{video.snippet.channelTitle}</p>
                                <p className="video-description">{video.snippet.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VideoTutorials;
