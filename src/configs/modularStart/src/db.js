import mongoose from 'mongoose'

const connectToDB = (url = process.env.MONGO_URI) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
}

export default connectToDB
