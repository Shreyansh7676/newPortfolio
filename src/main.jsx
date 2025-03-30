import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import App from './App.jsx'
import Contact from './Contact.jsx'
import Landing from './Landing.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
