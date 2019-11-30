import User from "./models/user";

const resolvers = {
  Query: {
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      const user = new Hero({ name, email });
      await user.save();
      return user;
    }
  }
};

export default resolvers;
