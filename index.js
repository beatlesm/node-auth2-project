const server = require('./api/server')
const { PORT } = require('./api/secrets')

server.listen(PORT, () => {
  console.log(`\n** Running on port ${PORT} **\n`)
})