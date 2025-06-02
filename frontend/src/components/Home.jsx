import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to the Blog App</h1>
      <div className="home-links">
        <ul>
          <li>
            <Link to="/viewblogs" className="home-link">
              View All Blogs
            </Link>
          </li>
          <li>
            <Link to="/addblog" className="home-link">
              Create A Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

