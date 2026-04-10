// Import React's StrictMode.
// StrictMode helps highlight potential problems in an application
// during development. It does not affect the production build. 
import { StrictMode } from 'react'

// Import createRoot from React DOM to render the React app
// into the HTML page. 
import { createRoot } from 'react-dom/client'

// Import global CSS styles for the entire application
import './index.css'

// Import the main App component which contains the rest of the UI
import App from './App.jsx'

// Find the HTML element with the id "root" in the index.html
// and tell React to render our application inside it. 
createRoot(document.getElementById('root')).render(

  // StrictMode wraps the application to help detect issues
  // and enforce best practices during development
  <StrictMode>

    {/* Render the main App component */}
    <App />
    
  </StrictMode>,
)
