var express = require('express')
var http = require('http')
var app = express()
const Axios = require('axios')
var list = []

app.get('/', (req, res) => {
  res.send(users)
})


app.get('/api/search', function(req, res) {    //UN SEARCH PARA BUSCAR TODOS LOS PRODUCTOS QUE MATCHEEN CON EL QUERY PARAMS
  console.log(req.query)
  const { search } = req.query
      Axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then(rta => {
          if(!rta.data.results) {
              res.send('No se encontro lo que buscaba :(').status(404)
          }
          list = rta.data.results.map(prod => {
              const producto = {
                  id: prod.id,
                  title: prod.title,
                  price: prod.price,
                  currency_id: prod.currency_id,
                  available_quantity: prod.available_quantity,
                  thumbnail: prod.thumbnail,
                  condition: prod.condition
              }
              return producto
          })
            
          res.json(list)
      }).catch(err => {
          console.log('D: Error: ', err)
          res.send('No se encontro lo que buscaba :(').status(404)
      })
  });
  

app.get('/', (req, res) => {
  res.status(200).send("Welcome to MERCADO LIBRE'S API REST")
})

http.createServer(app).listen(3001, () => {
  console.log('Server started at http://localhost:3001');
});