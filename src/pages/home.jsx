import pfp from "/pfp.png"
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className="profile">
                <img className="pfp" src={pfp} alt="Profile picture" draggable="false" />
                <div className="links">
                    <a className="active" href="https://www.github.com/xXtrevorXx/" target="_blank"><i className="bi bi-github"></i></a>
                    <a className="active" href="https://www.linkedin.com/in/trevorwheeler/" target="_blank"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
            <h1>Trevor Wheeler</h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h1>Featured Projects</h1>
            <div className="projects">
                <div className="project">
                    <h5 className="title">MIDI Piano</h5>
                    <p className="text">A web based piano application that can be controlled with either a midi controller or a mouse.</p>
                    <div className="tags">
                        <h6 className="title">Tags:</h6>
                        <span className="tag">HTML</span>
                        <span className="tag">CSS</span>
                        <span className="tag">Javascript</span>
                        <span className="tag">Python</span>
                        <span className="tag">Django</span>
                        <span className="tag">Tone.js</span>
                        <span className="tag">WEBMIDI.js</span>
                        <span className="tag">Postgres</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/xXtrevorXx/MIDI-Piano" target="_blank"><i className="bi bi-github"></i></a>
                        <a href="https://www.youtube.com/watch?v=Kc5otcJNYwY" target="_blank"><i className="bi bi-youtube"></i></a>
                        <a href="/midi" target="_blank"><i className="bi bi-link-45deg"></i></a>
                    </div>
                </div>
                <div className="project">
                    <h5 className="title">Portfolio Site</h5>
                    <p className="text">A website made to demonstrate my skills as a developer and act as a hub for my personal projects.</p>
                    <div className="tags">
                        <h6 className="title">Tags:</h6>
                        <span className="tag">HTML</span>
                        <span className="tag">CSS</span>
                        <span className="tag">Javascript</span>
                        <span className="tag">React</span>
                        <span className="tag">Docker</span>
                        <span className="tag">AWS</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/xXtrevorXx/Chrome-Extension" target="_blank"><i className="bi bi-github"></i></a>
                        <a href="https://www.youtube.com/watch?v=0" target="_blank"><i className="bi bi-youtube"></i></a>
                        <a href="/" target="_blank"><i className="bi bi-link-45deg"></i></a>
                    </div>
                </div>
                <div className="project">
                    <h5 className="title">Chrome Extension</h5>
                    <p className="text">A chrome extension for removing short-form content from websites like Youtube and Instagram.</p>
                    <div className="tags">
                        <h6 className="title">Tags:</h6>
                        <span className="tag">HTML</span>
                        <span className="tag">CSS</span>
                        <span className="tag">Javascript</span>
                        <span className="tag">Manifest</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/xXtrevorXx/Portfolio" target="_blank"><i className="bi bi-github"></i></a>
                        <a href="https://www.youtube.com/watch?v=ej5fKXtoeTA" target="_blank"><i className="bi bi-youtube"></i></a>
                        <a href="https://chromewebstore.google.com/detail/short-form-content-remova/bbobcnmcegmkheaimcepkmcmnaaomagn" target="_blank"><i className="bi bi-link-45deg"></i></a>
                    </div>
                </div>
            </div>
            <NavLink to="/projects" onClick={() => window.scrollTo(0,0)}>View All <i className="bi bi-arrow-right"></i></NavLink>
        </>
    );
}