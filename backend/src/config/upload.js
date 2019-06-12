const multer = require('multer');
const path = require('path');
// Configuracao do destino e nome da imagem que sera armazenada usando o multer
module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname,'..','..', 'uploads'),
        filename: function(req , file, callback){
            callback(null, file.originalname);
        }
    })
};