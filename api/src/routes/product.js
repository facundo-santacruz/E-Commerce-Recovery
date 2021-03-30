const app = require('express').Router();

const  {getProductsRedis } = require('../redis')
// //----------------------BUSCAR UN PRODUCTO------------------------------------------------------

app.get('/product', function(req, res) {    
  const { id } = req.query
  const route = `https://api.mercadolibre.com/items/${id}`
  return getProductsRedis(`${id}`, res, route, "query")
  
});




// ---------------REALIZA LA PRIMERA BUSQUEDA DE PRODUCTO----------
app.get('/search', function(req, res) { 
  const { search, number } = req.query;
  const route = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${(number-1)*30}&limit=${30}`;
  return getProductsRedis(`${search}${number}`, res, route, "query")
});


const objeto = (myObj) => {
  var newObj = ""
  for (var key in myObj) {
    if (key !== "search" && key !== "number"){
      typeof(myObj[key]) === 'string'  ? newObj+=`&${key}=${myObj[key].replace(",","")}` : newObj+=`&${key}=${myObj[key][1].replace(","," ")}`
    }
  }
  return newObj;
}
//----------------------BUSCAR POR CONDICION (usado o no)------------------------------------------------------

app.get('/condition', function(req, res) {
  var condition = objeto(req.query)
  const { search, number} = req.query
  const route = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${(number-1)*30}&limit=${30}${condition}`
  return getProductsRedis(`${search}${number}${condition}`, res, route, "query")
  
});

//-------------------BUSCAAR REVIEW  -----------------------
app.get('/reviews', function(req, res) {    
  const { id } = req.query
  const route = `https://api.mercadolibre.com/reviews/item/${id}`
  return getProductsRedis(`review${id}`, res, route, "query")
});

app.get('/seller', function(req, res) {    
  const { id } = req.query;
  const route = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${id}`;
  return getProductsRedis(`seler${id}`, res, route, "query")
});




module.exports = app