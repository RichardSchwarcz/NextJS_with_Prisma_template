const Member = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/require-await
    members: async (_parent, args, context) =>
      context?.prisma?.member.findMany(),
  },
}

export default Member
