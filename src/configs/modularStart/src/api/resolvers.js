import merge from 'lodash/merge'
import users from './users'
import posts from './posts'

export default merge({}, users.resolvers, posts.resolvers)
