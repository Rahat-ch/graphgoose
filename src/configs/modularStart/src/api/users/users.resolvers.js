const users = (_, __, ctx) => {
  return ctx.models.users.find({}).exec()
}

const createUser = (_, args, ctx) => {
  return ctx.models.users.create(args.input)
}

export default {
  Query: {
    users
  },
  Mutation: {
    createUser
  }
}
