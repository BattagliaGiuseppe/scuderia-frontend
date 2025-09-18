import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // importa il CSS

// Crea il root React e monta l'app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
