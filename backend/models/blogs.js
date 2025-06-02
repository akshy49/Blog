const mongoose=require('mongoose')

const blogSchema = new mongoose.Schema({
    title:String,
    author:String,
    content:String
})

const Blog=mongoose.model('blogs',blogSchema)

module.exports=Blog;