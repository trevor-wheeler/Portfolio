import { NavLink } from 'react-router-dom'

export default function Nav() {
    const soundEffect = new Audio('/switch1.mp3');

    return (
        <nav>
            <ul className="nav-routes">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <button className="theme-btn" onClick={() => updateTheme(soundEffect)}><i className="bi bi-moon-stars-fill"></i></button>
        </nav>
    );
}

function updateTheme(soundEffect) {
    soundEffect.currentTime = 0;
    soundEffect.play();
    let theme = localStorage.getItem('theme');
    // If theme is dark set theme to light
    if (theme === 'dark') {
        document.body.classList = 'light';
        localStorage.setItem('theme', 'light');
    }
    // If theme is light set theme to dark
    else if (theme === 'light') {
        document.body.classList = 'dark';
        localStorage.setItem('theme', 'dark');
    }
}
