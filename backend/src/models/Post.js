const mongoose = require('mongoose');

// Criacao do modelo de post que sera armazenado no monbodb
const PostSchema = new mongoose.Schema({
    author : String,
    place: String,
    description: String,
    hashtags: String,
    image: String, // Nao sera salvo a imagem no banco, mas sim o caminho
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true, // Data da criacao, horario e etc
});

module.exports = mongoose.model('Post', PostSchema);