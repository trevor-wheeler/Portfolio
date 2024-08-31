import Nav from './navbar.jsx'
import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx'
import Contact from './pages/contact.jsx'
import Confirm from './pages/confirm.jsx'
import { Route, Routes } from "react-router-dom"

export default function App() {
    return (
        <>
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </>
    );
}