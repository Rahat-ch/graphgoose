import schema from './schema.js'
import resolvers from './resolvers'
import models from './models'

export default {
  typeDefs: schema,
  resolvers,
  context: {
    models
  }
}
