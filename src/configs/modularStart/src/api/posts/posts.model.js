import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  conent: {
    type: String,
    required: true
  }
}, { timestamps: true })

const post = mongoose.model('post', postSchema)

export default post
