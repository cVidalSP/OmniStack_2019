const Post = require('../models/Post');

// Biblioteca para redimensionamento de imagem
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

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

        const [ name ] = image.split('.');
        const fileName = `${name}.jpg`;

        // Redimensionamento da imagem e colocando na pasta resized
        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName )
            )
            fs.unlinkSync(req.file.path); // Apaga a imagem de fora da pasta resized (imagem original)
            // Ou seja, apenas armazenar a imagem redimensionada no back end

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        })

        req.io.emit('post', post);// Envia os novos dados para `geral` que esta conectado

        return res.json(post)
    },
}