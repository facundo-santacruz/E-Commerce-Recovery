const app = require('express').Router();
const axios = require('axios')
const cat = require('../models/categories.js')


const  client = require('../redis')

console.log(client);
// //------------------BUSCA UNA QUERY CON UN LIMITE DE 30 UNIDADES----------------------------
// //------------------Y LO GUARDA EN LA CACHE SI NO SE HIZO LA PETICION-----------------------

app.get('/categories', function(req,res){
  try {
    // Check the redis store for the data first
    client.get(`categories`, async (err, recipe) => {
      if (recipe) {
        console.log("si existe en la cache");
        return res.status(200).send({
          error: false,
          message: `Recipe for categories from the cache`,
          data: cat
        })
      } else { // When the data is not found in the cache then we can make request to the server
        console.log("no existe en la cache");
        // const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/categories`);

        // save the record in the cache for subsequent request
        client.set(`categories`, 2000, JSON.stringify(cat));

        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe  categories from the server`,
          data: cat
        });
    }
  }) 
} catch (error) {
    console.log(error)
}
});
// })

app.get('/category', function(req, res) {    
      const { id, number } = req.query
      console.log( req.query)
      try {
        // Check the redis store for the data first
        client.get(`${id}${number}`, async (err, recipe) => {
          if (recipe) {
            return res.status(200).send({
              error: false,
              message: `Recipe for category:${id} ${number} from the cache`,
              data: JSON.parse(recipe)
            })
          } else { // When the data is not found in the cache then we can make request to the server
            const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${id}&offset=${(number-1)*30}&limit=${30}`);
            
            // save the record in the cache for subsequent request
            client.set(`${id}${number}`, 14200, JSON.stringify(recipe.data));
            // return the result to the client
            return res.status(200).send({
              error: false,
              message: `Recipe for category:${id} ${number} from the server`,
              data: recipe.data
            });
        }
      }) 
      } catch (error) {
        console.log(error)
      }
    });
    
 

    const objeto = (myObj) => {
      var newObj = ""
      for (var key in myObj) {
        if (key !== "number"){
          console.log(myObj[key][1]);
          typeof(myObj[key]) === 'string'  ? newObj+=`&${key}=${myObj[key].replace(",","")}` : newObj+=`&${key}=${myObj[key][1].replace(","," ")}`
        }
      }
      console.log(newObj)
      return newObj;
    }

    //----------------------BUSCAR POR CONDICION (usado o no) POR CATEGORIA------------------------------------------------------
    
    app.get('/condition_cat', function(req, res) {    
      console.log(req.query)    
      var condition = objeto(req.query)
      // const condition = cant(filtros)
      console.log(condition);
      const { number} = req.query;
      try {
        // Check the redis store for the data first
        client.get(`${number}${condition}`, async (err, recipe) => {
          if (recipe) {
            return res.status(200).send({
              error: false,
              message: `Recipe for query: offset:${number} condition:${condition} from the cache`,
              data: JSON.parse(recipe)
            })
          } else { // When the data is not found in the cache then we can make request to the server
            const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?offset=${(number-1)*30}&limit=${30}${condition}`);
    
            // save the record in the cache for subsequent request
            client.set(`${number}${condition}`, 1440, JSON.stringify(recipe.data));
    
            // return the result to the client
            return res.status(200).send({
              error: false,
              message: `Recipe for query: offset:${number} condition:${condition} from the server`,
              data: recipe.data
            });
        }
      }) 
      } catch (error) {
        console.log(error)
      }
    });
    
  module.exports = app  