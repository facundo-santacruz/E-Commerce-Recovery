const app = require('express').Router();
const axios = require('axios')

const { response } = require('express')
const redis = require('redis');
// make a connection to the local instance of redis
const client = redis.createClient(6379);


client.on("error", (error) => {
  console.error(error);
})

// //----------------------BUSCAR UN PRODUCTO------------------------------------------------------

app.get('/product', function(req, res) {    
  const { id } = req.query
  console.log(req.query)
  try {
    // Check the redis store for the data first
    client.get(`${id}`, async (err, recipe) => {
      if (recipe) {
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${id} from the cache`,
          data: JSON.parse(recipe)
        })
      } else { // When the data is not found in the cache then we can make request to the server
        const recipe = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        
        // save the record in the cache for subsequent request
        client.setex(`${id}`, 14200, JSON.stringify(recipe.data));
        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${id} from the server`,
          data: recipe.data
        });
    }
  }) 
  } catch (error) {
    console.log(error);
  }
});




// ---------------REALIZA LA PRIMERA BUSQUEDA DE PRODUCTO----------
app.get('/search', function(req, res) {    
  console.log(req.query);
  try {
    const { search, number } = req.query;
    console.log(`${search}${number}`);
    // Check the redis store for the data first
    client.get(`${search}${number}`, async (err, recipe) => {
      if (recipe) {
        console.log("si existe en la cache");
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${search} offset:${number} from the cache`,
          data: JSON.parse(recipe)
        })
      } else { // When the data is not found in the cache then we can make request to the server
        console.log("no existe en la cache");
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${number}&limit=${30}`);

        // save the record in the cache for subsequent request
        client.setex(`${search}${number}`, 20000, JSON.stringify(recipe.data));

        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${search} offset:${number} from the server`,
          data: recipe.data
        });
    }
  }) 
} catch (error) {
    console.log(error)
}
});


//----------BUSCA UNA QUERY CON UN LIMITE DE 30 UNIDADES Y UN ORDEN ASC/DESC ----------------------------

app.get('/sort_price', function(req, res) {    
  console.log(req.query)
  const { search, price, number } = req.query
  try {
    // Check the redis store for the data first
    client.get(`${search}${number}${price}`, async (err, recipe) => {
      if (recipe) {
        console.log("si existe en la cache");
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${search} offset:${number} orderby:${price} from the cache`,
          data: JSON.parse(recipe)
        })
      } else { // When the data is not found in the cache then we can make request to the server
        console.log("no existe en la cache");
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&sort=${price}&offset=${number}&limit=${30}`);

        // save the record in the cache for subsequent request
        client.setex(`${search}${number}${price}`, 1440, JSON.stringify(recipe.data));

        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${search} offset:${number} orderby:${price} from the server`,
          data: recipe.data
        });
    }
  }) 
  } catch (error) {
    console.log(error)
  }
});

//----------------------BUSCAR POR CONDICION (usado o no)------------------------------------------------------

app.get('/condition', function(req, res) {    
  console.log(req.query)
  const { search, number, condition } = req.query
  try {
    // Check the redis store for the data first
    client.get(`${search}${number}${condition}`, async (err, recipe) => {
      if (recipe) {
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${search} offset:${number} condition:${condition} from the cache`,
          data: JSON.parse(recipe)
        })
      } else { // When the data is not found in the cache then we can make request to the server
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${number}&limit=${30}&condition=${condition}`);

        // save the record in the cache for subsequent request
        client.setex(`${search}${number}${condition}`, 1440, JSON.stringify(recipe.data));

        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${search} offset:${number} condition:${condition} from the server`,
          data: recipe.data
        });
    }
  }) 
  } catch (error) {
    console.log(error)
  }
});

//-------------------BUSCAAR REVIEW  -----------------------
app.get('/reviews', function(req, res) {    
  const { id } = req.query
  console.log(req.id)
  try {
    // Check the redis store for the data first
    console.log('hi')
    client.get(`review${id}`, async (err, recipe) => {
      if (recipe) {
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${id} from the cache`,
          data: JSON.parse(recipe)
        })
      } else { // When the data is not found in the cache then we can make request to the server
        const recipe = await axios.get(`https://api.mercadolibre.com/reviews/item/${id}`);
        
        // save the record in the cache for subsequent request
        client.setex(`review${id}`, 14200, JSON.stringify(recipe.data));
        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${id} from the server`,
          data: recipe.data
        });
    }
  }) 
  } catch (error) {
    console.log(error);
  }
});



module.exports = app