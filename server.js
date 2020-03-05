const express = require('express');

const app = express()


//o req vai ter todos os detalhes de um requisiçao
// pode-se pegar dentro do req, paramentros, corpo da req, cabeçalho, usuario, auth, ip
// o res é a resposta

// rota usando o express
app.get('/', (req, res) => {
    res.send("Hello")
})


app.listen(3001)