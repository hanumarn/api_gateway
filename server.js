const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema')
const app = express()

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))
app.listen(3002, () => {
   console.log('API GATEWAY ON PORT 3002')
})