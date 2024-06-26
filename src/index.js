const express = require('express');
const app = express();
const morgan= require('morgan');
const cors = require('cors');
const bodyparser= require('body-parser');
require('dotenv').config();

require('./database');

app.set('Port',4000)
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors({origin:'*'}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hola Mundo, aquí servidor NodeJS desde Heroku!')
  })
app.use('/jefe',require('./routes/Jefe.route'));
app.use('/empleado',require('./routes/Empleado.route'));


app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)

});

// app.listen(app.get('Port'), ()=>{
//    console.log('Servidor escuchando por el Puerto ', app.get('Port'));
// });