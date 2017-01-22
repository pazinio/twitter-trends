const { comparison } = require('../collect')
const TwoTrendsComparisonOutput = require('./schema')
const { 
  GraphQLID,
  GraphQLNonNull,
  GraphQLString 
} = require('graphql')

const TwoTrendsComparison = {
  type: TwoTrendsComparisonOutput,
  description: 'TwoTrendsComparison',
  args: {
    trend1: {
      name: 'trend1',
      type: new GraphQLNonNull(GraphQLString),
    },
    trend2: {
      name: 'trend2',
      type: new GraphQLNonNull(GraphQLString),
    },
    from: {
      name: 'from',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (root, params, req) => 
    comparison(params.from, params.trend1, params. trend2)
}

const Queries = {
  twoTrends: TwoTrendsComparison,
}

module.exports = Queries