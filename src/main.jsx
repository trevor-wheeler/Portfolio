import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

let theme = localStorage.getItem('theme');

const getThemePreference = () => {
    // If default theme is dark set local storage to dark
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem('theme', 'dark');
        theme = 'dark';
    }
    // If default theme is light set local storage to light
    else {
        localStorage.setItem('theme', 'light');
        theme = 'light';
    }
}
// Check for theme in local storage
if (!theme || theme && theme === 'auto') {
    getThemePreference();
}
// Update body to reflect theme
document.body.classList.add(theme);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)
