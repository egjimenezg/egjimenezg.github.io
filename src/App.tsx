import './App.css'

import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from "./HomePage.tsx";
import Blog from './Blog.tsx';


function App() {
  return (
    <BrowserRouter>
      <div className="site-layout">
        <header className="top-header">
          <nav className="primary-nav" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
