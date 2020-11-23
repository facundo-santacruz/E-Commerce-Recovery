const app = require('express').Router();
const axios = require('axios')
const cat = require('../models/categories.js')

const redis = require('redis');
// make a connection to the local instance of redis
const client = redis.createClient(6379);


client.on("error", (error) => {
  console.error(error);
})



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
        client.setex(`categories`, 2000, JSON.stringify(cat));

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
            const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${id}&offset=${number}&limit=${30}`);
            
            // save the record in the cache for subsequent request
            client.setex(`${id}${number}`, 14200, JSON.stringify(recipe.data));
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
    
    
    app.get('/sort_price_cat', function(req, res) {    
      console.log(req.query)
      const { id, price, number } = req.query
      try {
        // Check the redis store for the data first
        client.get(`${id}${number}${price}`, async (err, recipe) => {
          if (recipe) {
            console.log("si existe en la cache");
            return res.status(200).send({
              error: false,
              message: `Recipe for query:${id} offset:${number} orderby:${price} from the cache`,
              data: JSON.parse(recipe)
            })
          } else { // When the data is not found in the cache then we can make request to the server
            console.log("no existe en la cache");
            const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${id}&sort=${price}&offset=${number}&limit=${30}`);
    
            // save the record in the cache for subsequent request
            client.setex(`${id}${number}${price}`, 1440, JSON.stringify(recipe.data));
    
            // return the result to the client
            return res.status(200).send({
              error: false,
              message: `Recipe for query:${id} offset:${number} orderby:${price} from the server`,
              data: recipe.data
            });
        }
      }) 
      } catch (error) {
        console.log(error)
      }
    });
    
    //----------------------BUSCAR POR CONDICION (usado o no) POR CATEGORIA------------------------------------------------------
    
    app.get('/condition_cat', function(req, res) {    
      console.log(req.query)
      const { id, number, condition } = req.query
      try {
        // Check the redis store for the data first
        client.get(`${id}${number}${condition}`, async (err, recipe) => {
          if (recipe) {
            return res.status(200).send({
              error: false,
              message: `Recipe for query:${id} offset:${number} condition:${condition} from the cache`,
              data: JSON.parse(recipe)
            })
          } else { // When the data is not found in the cache then we can make request to the server
            const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${id}&offset=${number}&limit=${30}&condition=${condition}`);
    
            // save the record in the cache for subsequent request
            client.setex(`${id}${number}${condition}`, 1440, JSON.stringify(recipe.data));
    
            // return the result to the client
            return res.status(200).send({
              error: false,
              message: `Recipe for query:${id} offset:${number} condition:${condition} from the server`,
              data: recipe.data
            });
        }
      }) 
      } catch (error) {
        console.log(error)
      }
    });
    
  module.exports = app  