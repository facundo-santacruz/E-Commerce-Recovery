var express = require('express')
var http = require('http')
var app = express()

var users = ['oscar', 'juan', 'marcos']

server.get('/users', (req, res) => {
  res.send(users)
})

// app.get('/', (req, res) => {
//   res.status(200).send("Welcome to API REST")
// })

http.createServer(app).listen(3001, () => {
  console.log('Server started at http://localhost:8001');
});

// server.get('/api/search', function(req, res) {    //UN SEARCH PARA BUSCAR TODOS LOS PRODUCTOS QUE MATCHEEN CON EL QUERY PARAMS
//   console.log(req.query)
//   const { query } = req.query
//       Axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
//       then(rta => {
//           if(!rta) {
//               res.send('No se encontro lo que buscaba :(').status(404)
//           }
//           products = rta
//           res.json(rta)
//       }).catch(err => {
//           console.log('D: Error: ', err)
//           res.send('No se encontro lo que buscaba :(').status(404)
//       })
//   });
  

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// server.listen(3002, () => {            //MODIFIQUE EL PUERTO EN EL QUE SE ESCUCHA EL SERVIDOR PARA PODER TENER FRONT Y BACK ABIERTOS

//   console.log('%s listening at 3002'); // eslint-disable-line no-console
// })
module.exports = server;
