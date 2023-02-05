const express = require ('express')
const app = express()
const puerto = 3030
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))


const mainRouter = require('./routers/main');
app.use('/', mainRouter);

app.listen(puerto,() => console.log('Servidor funcionando en http://localhost:' + puerto ))









