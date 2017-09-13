const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLNonNull,
} = require('graphql')

const customer = [
  { id: 1, name: 'test1', age: 43 },
  { id: 2, name: 'test2', age: 34 },
  { id: 3, name: 'test3', age: 56 },
]
const customerType = new GraphQLObjectType({
  name: 'customer',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  })
})

//root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: customerType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        for (let i=0; i < customer.length; i++) {
          if (customer[i].id === args.id) {
            return customer[i]
          }
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
