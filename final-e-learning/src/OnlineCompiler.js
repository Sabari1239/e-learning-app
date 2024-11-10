// src/OnlineCompiler.js
import React, { useState } from 'react';
import axios from 'axios';
import './OnlineCompiler.css';

const OnlineCompiler = () => {
  const [language, setLanguage] = useState('python3');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

 
  const clientId = 'faab838d2b657001398847af66c2269d';
  const clientSecret = 'd36be8b4ff8e5b708d2b9ef95e4ee591345bf5745f089768fdcbd0542f7b5d29';

  
  const runCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        '/jdoodle/v1/execute', 
        {
          clientId,
          clientSecret,
          script: code,
          language,
          versionIndex: '0',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setOutput(response.data.output || 'No output returned');
    } catch (error) {
      console.error("Error executing code:", error);
      setOutput('Error executing code: ' + (error.response ? error.response.data.error : error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="compiler-container">
      <div className="card">
        <h2>Online Compiler</h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language-select"
        >
          <option value="python3">Python 3</option>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
        </select>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Type your code here..."
          className="code-input"
        />
        <button onClick={runCode} disabled={loading} className="run-button">
          {loading ? 'Running...' : 'Run Code'}
        </button>
        <div className="output">
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default OnlineCompiler;
