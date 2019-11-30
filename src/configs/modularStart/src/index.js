import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import dotenv from 'dotenv'
import db from './db'
import api from './api'

dotenv.config()

const app = express()
db()

const server = new ApolloServer({
  ...api,
  tracing: true,
  debug: true
})

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server is blasting off to http://localhost:4000${server.graphqlPath}`
  )
)
