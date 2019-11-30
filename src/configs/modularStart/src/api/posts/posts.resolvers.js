const posts = (_, __, ctx) => {
  return ctx.models.posts.find({}).exec()
}

const createPost = (_, args, ctx) => {
  return ctx.models.posts.create(args.input)
}

export default {
  Query: {
    posts
  },
  Mutation: {
    createPost
  }
}
