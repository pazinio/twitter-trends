const {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType
} = require('graphql')

const TwoTrendsComparisonOutput = new GraphQLObjectType({
  name: 'TwoTrendsComparisonOutput',
  fields: () => ({
    trend1: {
      name: 'trend1',
      type: GraphQLInt,
    },
    trend2: {
      name: 'trend2',
      type: GraphQLInt,
    },
    stats : {
      name: 'stats',
      type: GraphQLString,
      resolve: root => JSON.stringify({ ratio: root.trend1 / root.trend2 })
    },
  })
})


module.exports = TwoTrendsComparisonOutput