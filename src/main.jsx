import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <StrictMode>
    <SocketContextProvider>
    <ToastContainer position="top-right" autoClose={3000} />
    <App />
    </SocketContextProvider>
  </StrictMode>
  </AuthContextProvider>
)
