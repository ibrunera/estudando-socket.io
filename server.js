const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection',socket=>console.log(socket.id))

server.listen(3333,()=>console.log('Server rodando em http://localhost:3333'))