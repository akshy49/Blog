const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000

const Blog = require('./models/blogs')
const cors = require('cors')

app.use(express.json())
app.use(cors())

require('dotenv').config()

main()
  .then(() => console.log("MONGODB Connected"))
  .catch(err => console.log(err))

async function main() {
  await mongoose.connect(process.env.MONGODB_URL)
}

app.post('/addblog', async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Insufficient data" })
    }

    const { author, content } = req.body
    const newBlog = new Blog({ author, content })
    await newBlog.save()

    res.status(201).json({ message: "Blog Created Successfully" })
  } catch (error) {
    console.error("Error creating blog:", error)
    res.status(500).json({ error: "Internal server error" })
  }
})

app.get('/viewblogs', async (req, res) => {
  try {
    const blogs = await Blog.find()
    if (!blogs || blogs.length === 0) {
      return res.status(400).json({ error: "No Blogs Available" })
    }
    res.status(200).json({ Blogs: blogs })
  } catch (error) {
    console.error("Error fetching blogs:", error)
    res.status(500).json({ error: "Internal server error" })
  }
})

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`)
})
