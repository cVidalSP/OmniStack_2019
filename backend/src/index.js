const express = require('express');// permite lidar com rotas, parametros e respostas para os clientes
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// criacao do server
const server = require('http').Server(app);
const io = require('socket.io')(server) // Nosso server aceita protocolos http e protocolos via websocket (tempo real)

//Conexao com o banco
mongoose.connect('mongodb+srv://usuario:senha@cluster0-cfebw.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
});

app.use((req, res, next) =>{
    req.io = io;
    next();// Garante que isso seja executado, porem nao trava as outras requisicoes.
}) // Faz com que todos as proximas requisicoes tenham acesso ao io, que faz a atualizacao em tempo real
  // para todos os usuarios conectados a API caso exista um novo post.

app.use(cors()); // O cors permite que apps em outros dominios acessem nossa API. 
                //Nesse caso, qualquer dominio pode acessar pois nao foi passada nenhuma regra

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes')); // importacao das rotas

server.listen(3333);

