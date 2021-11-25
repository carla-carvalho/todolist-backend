const mongoose = require('mongoose');

const Conn = () =>{
    mongoose.connect('mongodb+srv://dbuser:todolist1@todolist.dx9p2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('MongoDB Conectado')
    }).catch(err => console.log('Erro de conexão com o banco', err));

}

module.exports = Conn;
