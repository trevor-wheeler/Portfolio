import pfp from '/pfp.png';
import React, { useContext, useState, useRef, useEffect } from 'react';
import { useLocation, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import { annotate, annotationGroup } from 'rough-notation';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const pageDataContext = React.createContext();

const emailSound = new Audio('/sent.mp3');
const themeSound = new Audio('/switch.mp3');

export default function App() {
  const page = useRef();
  const nav = useRef();
  const location = useLocation();

  useEffect(() => {
    animate(nav, page);
  }, [location.pathname]);

  return (
    <pageDataContext.Provider value={{page, nav}}>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </pageDataContext.Provider>
  );
}

// Navbar
function Nav() {
  const {page} = useContext(pageDataContext);
  const {nav} = useContext(pageDataContext);

  return (
    <nav ref={nav}>
      <ul className="nav-routes">
        <li><NavLink to="/">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <button className="accent theme-btn gradient" onClick={() => updateTheme(page, nav)}><i className="bi bi-moon-stars-fill"></i></button>
    </nav>
  );
}

function animate(nav, page) {
  let array = Array.from(nav.current.querySelectorAll('.accent'));
  array = array.concat(Array.from(page.current.querySelectorAll('.accent')));
  
  array.forEach(element => {
    element.classList.remove('active');
    setTimeout(() => element.classList.add('active'), 10);
  })
}

function updateTheme(page, nav) {
  animate(nav, page);

  themeSound.currentTime = 0;
  themeSound.play();
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

// About
function About() {
  const {page} = useContext(pageDataContext);
  const paragraph = useRef();
  useEffect(() => {
    const text = paragraph.current.querySelectorAll('.highlight');
    var group = [];
    text.forEach((word, index) => {
      let annotation = annotate(word, {type: 'highlight', multiline: true, animationDuration: 100});

      if (index % 2 === 0) {
        annotation.color = 'var(--highlight)';
      }
      else {
        annotation.color = 'var(--highlight-accent)';
      }

      group.push(annotation);
    });
    const newgroup = annotationGroup(group);
    //setTimeout(() => newgroup.show(), 100);
  }, []);

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
      <p className="text" ref={paragraph}>I'm a <span className="highlight">full-stack developer</span> located in the Greater <span className="highlight">Seattle</span> Area, most skilled in <span className="highlight">Python and JavaScript</span>, with a foundational <span className="highlight">background in C</span>. In addition to programming, I have <span className="highlight">experience in Linux</span> and managing web servers with <span className="highlight">Docker and AWS</span>. My goal as a developer is to build responsive, user-friendly web applications and continually expand my skill set with the <span className="highlight">newest technology</span>. Outside of programming, I have interests in music production and personal finance.</p>
      <h1>Featured Projects</h1>
      <div ref={page} className="projects">
        <div className="accent project">
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
        <div className="accent project">
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
        <div className="accent project">
          <h5 className="title">Chrome Extension</h5>
          <p className="text">A chrome extension for removing short-form content from websites like YouTube and Instagram.</p>
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
      <NavLink to="/projects" onClick={() => window.scrollTo(0, 0)}>View All <i className="bi bi-arrow-right"></i></NavLink>
    </>
  );
}

// Contact
function Contact() {

  const {page} = useContext(pageDataContext);
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const [mailSent, setMailSent] = useState(false);
  const navigate = useNavigate();
  const onSubmit = email => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios.post('http://localhost:5000', email, config);

    emailSound.volume = 0.5;
    emailSound.currentTime = 0;
    emailSound.play();
    setMailSent(true);
    setTimeout(() => navigate('/'), 1500);
  }

  if (mailSent) {
    return <Confirm />
  }
  else {
    return (
      <>
        <h1>Contact</h1>
        <form ref={page} className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="name-box">
            <div className="title-container first-name"><h6 className="title">First Name:</h6>{errors.first && <span className="required">*</span>}</div>
            <div className="title-container last-name"><h6 className="title">Last Name:</h6>{errors.last && <span className="required">*</span>}</div>
            <input {...register("first", {required: true})} className="input field first-name" type="text" />
            <input {...register("last", {required: true})} className="input field last-name" type="text" />
          </div>
          <div className="title-container"><h6 className="title">Email:</h6>{errors.email && <span className="required">*</span>}</div>
          <input {...register("email", {required: true})} className="input field" type="text" />
          <div className="title-container"><h6 className="title">Subject:</h6>{errors.subject && <span className="required">*</span>}</div>
          <input {...register("subject", {required: true})} className="input field" type="text" />
          <div className="title-container"><h6 className="title">Body:</h6>{errors.body && <span className="required">*</span>}</div>
          <textarea {...register("body", {required: true})} className="input body"></textarea>
          <input className="accent send-btn gradient" type="submit" value="Send" />
        </form>
      </>
    );
  }
}

function Confirm() {
  return (
    <div className="confirmation">
      <h3 className="confirmation-text">Sent <i className="bi bi-check-square-fill"></i></h3>
    </div>
  );
}

//Projects
function Projects() {
  const {page} = useContext(pageDataContext);
  return (
    <>
      <h1>Projects</h1>
      <div ref={page} className="projects">
        <div className="accent project">
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
        <div className="accent project">
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
        <div className="accent project">
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
    </>
  );
}