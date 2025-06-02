import React, { useState } from 'react'
import '../styles/Addblog.css'
import axios from 'axios'

const Addblog = () => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${baseUrl}/addblog`, {
        author,
        content
      })
      console.log(response.data)
      setAuthor('')
      setContent('')
      alert("Blog Created Successfully")
    } catch (error) {
      console.log("Error Creating Blog!!!", error)
    }
  }

  return (
    <div className="container">
      <h1 className="heading">Create Your Own Blog...</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="author" className="label">Author</label>
        <input
          type="text"
          id="author"
          placeholder="Enter author name"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input"
        />

        <label htmlFor="content" className="label">Content</label>
        <textarea
          id="content"
          placeholder="Enter your thoughts"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="input textarea"
        />

        <button type="submit" className="button">Create Blog</button>
      </form>
    </div>
  )
}

export default Addblog
