const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql')

const tqueries = require('./queries')
const tmutations = require('./mutations')

const queries = Object.assign({}, tqueries)
const mutations = Object.assign({}, tqueries)


module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: queries,
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    fields: mutations,
  }),
})
