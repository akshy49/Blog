import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/ViewBlogs.css'

export const ViewBlogs = () => {
  const [data, setData] = useState([])
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/viewblogs`)
        setData(response.data.Blogs)
      } catch (error) {
        console.log("Error fetching blogs:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="blogs-container">
      {data.map((blog) => (
        <div key={blog._id} className="blog-card">
          <p className="blog-author"><strong>Author:</strong> {blog.author}</p>
          <p className="blog-content">{blog.content}</p>
        </div>
      ))}
    </div>
  )
}
