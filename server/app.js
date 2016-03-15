'use strict'

const express = require('express')
const server = express()
const port = 20080
let directory = 'client'

// console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'dist') {
  directory = 'dist'
}

server.use(express.static(__dirname + '/../' + directory))
server.listen(port)

console.info(`
  Serving the ${directory}/ directory at localhost:${port}/
`)
