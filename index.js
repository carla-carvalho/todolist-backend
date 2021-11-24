const express = require('express');
const cors = require('cors');
const Conn = require('./conn/conn');

const Tarefa = require('./models/tarefas');

const tarefasRouter = require('./routes/tarefas.routes');


const app = express();

app.use(express.json());

app.use(cors());

app.use('/', tarefasRouter);

Conn();

const port = 3001; 
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));