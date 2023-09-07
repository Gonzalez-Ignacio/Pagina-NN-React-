import React from 'react'
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx'
import { AuthProvider } from './context/AuthProvider.jsx';

const root = document.getElementById('root');
const rootElement = createRoot(root);                             
rootElement.render(
  <AuthProvider>                                                  
    <App />
  </AuthProvider>
);
