import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { ViewBlogs } from './components/ViewBlogs'
import Addblog from './components/Addblog'

function App() {
  return (
    <Router>
      <nav className="navigationbar">
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/viewblogs" className="nav-link">
                View All Blogs
              </Link>
            </li>
            <li>
              <Link to="/addblog" className="nav-link">
                Create A Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewblogs" element={<ViewBlogs />} />
        <Route path="/addblog" element={<Addblog />} />
      </Routes>
    </Router>
  )
}

export default App

