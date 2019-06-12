const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-cfebw.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

app.use(require('./routes')); // importacao das rotas
app.listen(3333);

