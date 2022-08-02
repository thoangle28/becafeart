// content of index.js
/* const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
}) */

const express =  require('express')
const app = express()

app.use(( request, response, next )=> {
  console.log(request.headers)
  next()
})

app.use(( request, response, next )=> {
  request.chance =  Math.random()
  next()
})

app.get('/', ( request, response )=> {
  response.json({
    chance: request.chance
  })
})

app.listen(3000)