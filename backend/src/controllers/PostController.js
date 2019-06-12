const Post = require('../models/Post');

// uso de requisicoes assincronas 

module.exports = {
    // Listar todos os posts
    async index(req, res){

    },
    // Salvar post
    async store(req, res){ 
        console.log(req.file);

        return res.json({ok : true})
    },
}