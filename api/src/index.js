
const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path')

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(cors())
app.use(morgan('dev')); //muestra msj en consola del estado de la peticion
app.use(express.json()); // cada vez que llega un dato al servidor, este comprueba si el dato es un json
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
    res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Routes
app.use('/api',require('./routes/index'))




// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

// Starting

app.use(express.static(path.join(__dirname, '../../client/build')));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build'));
});