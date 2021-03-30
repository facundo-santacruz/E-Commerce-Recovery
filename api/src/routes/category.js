const app = require('express').Router();
const  { getCategoriesRedis, getProductsRedis} = require('../redis')

// //------------------BUSCA UNA QUERY CON UN LIMITE DE 30 UNIDADES----------------------------
// //------------------Y LO GUARDA EN LA CACHE SI NO SE HIZO LA PETICION-----------------------

app.get('/categories', function(req,res){
  return getCategoriesRedis("categories", res)
});

app.get('/category', function(req, res) {  
  const { id, number } = req.query;
  const route = `https://api.mercadolibre.com/sites/MLA/search?category=${id}&offset=${(number-1)*30}&limit=${30}`
  return getProductsRedis(`${id}${number}`, res, route, "category")
});
    


const objeto = (myObj) => {
  var newObj = ""
  for (var key in myObj) {
    if (key !== "number"){
      typeof(myObj[key]) === 'string'  ? newObj+=`&${key}=${myObj[key].replace(",","")}` : newObj+=`&${key}=${myObj[key][1].replace(","," ")}`
    }
  }
  return newObj;
}

    //----------------------BUSCAR POR CONDICION (usado o no) POR CATEGORIA------------------------------------------------------
    
app.get('/condition_cat', function(req, res) {    
  var condition = objeto(req.query)
  const { number} = req.query;
  const route = `https://api.mercadolibre.com/sites/MLA/search?offset=${(number-1)*30}&limit=${30}${condition}`
  getProductsRedis(`${number}${condition}`, res, route, "category")
  
});

module.exports = app  