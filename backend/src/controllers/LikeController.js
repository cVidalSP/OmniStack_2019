const Post = require('../models/Post');

// uso de requisicoes assincronas 

module.exports = {
    
    async index(req, res){
        // Listar curtidas (futuramente)
    },
    // Salvar like
    async store(req, res){ 
        const post = await Post.findById(req.params.id);

        post.likes += 1;

        await post.save();

        return res.json(post);
    },
}