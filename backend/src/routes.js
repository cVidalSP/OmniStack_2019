const express = require('express');

// Configuracao do multer, para upload de posts. Permite que o express entenda o corpo multipartformdata
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

// // Rotas
// routes.get('/',(req, res)=>{ // essa funcao req, res esta interceptando uma requisicao
//     return res.send(`Hello ${req.query.name}`);// res Retorna uma resposta da requisicao
// } )                                            // req representa a requisicao ex: localhost:3333/?name=Caina

// Posts
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);   

// Likes
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;