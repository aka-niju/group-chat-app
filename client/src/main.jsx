import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Chat from './components/Chat Page/Chat.jsx'
import Login from './components/Login Page/Login.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
},
{
  path: "/chat",
  element: <Chat />
},])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
