import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true })

const user = mongoose.model('user', userSchema)

export default user
