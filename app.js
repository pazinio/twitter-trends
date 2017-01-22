const errorHandler = require('errorhandler')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const MyGraphQLSchema = require('./graphql')
const app = express()

app.use('/graphql', graphqlHTTP(request => {
  const startTime = Date.now()
  return {
    schema: MyGraphQLSchema,
    graphiql: true,
    extensions({ document, variables, operationName, result }) {
      return { runTime: Date.now() - startTime  + ' Milli Seconds'}
    },
    formatError: error => ({
	  message: error.message,
	  locations: error.locations,
	  stack: error.stack
	})
  }
}))

/**
 * Error Handler.
 */
app.use(errorHandler())

app.listen(8083);