const express = require('express');

const routes = new express.Router();

// Rotas
routes.get('/',(req, res)=>{ // essa funcao req, res esta interceptando uma requisicao
    return res.send(`Hello ${req.query.name}`);// res Retorna uma resposta da requisicao
} )                                            // req representa a requisicao ex: localhost:3333/?name=Caina


module.exports = routes;