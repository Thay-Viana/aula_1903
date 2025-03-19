const express = require('express');
const app = express();
const port = 3000;

app.get('/', (resquest, response) => {
    response.send ('Olá Codespaces!!!');
});

app.get('/mensagem', (request, response) => {
    response.send('Boa tarde')
});

app.listen(port, () => {
   console.log("Aplicação em execução na porta" + port)
});