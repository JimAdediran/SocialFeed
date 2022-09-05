import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Post from './components/Post_Folder/Post'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Post />
  </React.StrictMode>
);


