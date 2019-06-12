const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer(uploadConfig);

// // Rotas
// routes.get('/',(req, res)=>{ // essa funcao req, res esta interceptando uma requisicao
//     return res.send(`Hello ${req.query.name}`);// res Retorna uma resposta da requisicao
// } )                                            // req representa a requisicao ex: localhost:3333/?name=Caina


routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);   

module.exports = routes;