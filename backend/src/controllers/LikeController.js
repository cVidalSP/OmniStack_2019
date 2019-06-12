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

        req.io.emit('like', post); // Mesma coisa do postController. Todos os usuarios
                                  // que estao conectados, receberam a atualizacao com essa nova
                                // informacao pelo socket.io

        return res.json(post);
    },
}