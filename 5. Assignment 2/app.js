const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('Inside the user middleware');
    res.send('<h1>Hi, this is Nadeem</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Inside the / middleware');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);