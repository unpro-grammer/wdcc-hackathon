import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import "./styles/home.css"
import './index.css'
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap';
    document.head.appendChild(link);

    // Cleanup function to remove the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
