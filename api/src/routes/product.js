const app = require('express').Router();
const axios = require('axios')

const { response } = require('express')
const  {getProductsRedis } = require('../redis')
// const redis = require('ioredis');
// const client = new redis(process.env.STACKHERO_REDIS_URL_TLS);
// client.on("error", (error) => {
//   console.error(error);
// })

// client.get(`ram1`, function (err, result) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(result); // Promise resolves to "bar"
//   }
// });
// //----------------------BUSCAR UN PRODUCTO------------------------------------------------------

app.get('/product', function(req, res) {    
  const { id } = req.query
  const route = `https://api.mercadolibre.com/items/${id}`
  return getProductsRedis(`${id}`, res, route, "query")
  
});




// ---------------REALIZA LA PRIMERA BUSQUEDA DE PRODUCTO----------
app.get('/search', function(req, res) {    
  console.log(req.query);
  const { search, number } = req.query;
  const route = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${(number-1)*30}&limit=${30}`;
  return getProductsRedis(`${search}${number}`, res, route, "query")
});


const objeto = (myObj) => {
  var newObj = ""
  for (var key in myObj) {
    if (key !== "search" && key !== "number"){
      console.log(myObj[key][1]);
      typeof(myObj[key]) === 'string'  ? newObj+=`&${key}=${myObj[key].replace(",","")}` : newObj+=`&${key}=${myObj[key][1].replace(","," ")}`
    }
  }
  console.log(newObj)
  return newObj;
}

const cant = (array) => {
  const newArray = array.map((elem, i) => {
    if (elem[1].length===1){
      return `&${elem[0]}=${elem[1]}`
    }else{
      return elem[1].map(sub => `&${elem[0]}=${sub}`)
    }

  })
  return newArray
  }
//----------------------BUSCAR POR CONDICION (usado o no)------------------------------------------------------

app.get('/condition', function(req, res) {
  console.log(req.query)    
  var condition = objeto(req.query)
  // const condition = cant(filtros)
  console.log(condition);
  const { search, number} = req.query
  const route = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${(number-1)*30}&limit=${30}${condition}`
  return getProductsRedis(`${search}${number}${condition}`, res, route, "query")
  
});

//-------------------BUSCAAR REVIEW  -----------------------
app.get('/reviews', function(req, res) {    
  const { id } = req.query
  console.log(req.id)
  const route = `https://api.mercadolibre.com/reviews/item/${id}`
  return getProductsRedis(`review${id}`, res, route, "query")
});

app.get('/seller', function(req, res) {    
  const { id } = req.query;
  const route = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${id}`;
  return getProductsRedis(`seler${id}`, res, route, "query")
});




module.exports = app