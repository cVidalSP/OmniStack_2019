const Post = require('../models/Post');

// uso de requisicoes assincronas 

module.exports = {
    // Listar todos os posts
    async index(req, res){
        const posts = await Post.find(/* Filtros da pesquisa */).sort('-createdAt');// Sinal - representa como se fosse o Desc

        res.json(posts);
    },
    // Salvar post
    async store(req, res){ 
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image,
        })

        return res.json(post)
    },
}