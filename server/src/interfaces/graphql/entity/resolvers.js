module.exports = {
    Mutation: {
      createEntity: async (_, args, { domains }) =>
        domains.entity.createEntity(args.input),
    },
  
    Query: {
      entities: async (_, args, { domains }) =>
        domains.entity.getEntities(args),
      entitiesLength: async (_, args, { domains }) =>
        domains.entity.getEntitiesLength(args),
    },
  };