const app = require('express').Router();
const axios = require('axios')

const { response } = require('express')
// const  client = require('../redis')
const redis = require('ioredis');
// const client = new Ioredis(process.env.STACKHERO_REDIS_URL_TLS)
// const client = new redis("redis://admin:pqGoqZ8qSguOohMYoXxKZrK5omkzxH0fb4UMsmg8knPcVOMt4QL8q3I2vpZa7wDY@r98enr.stackhero-network.com:6379");
const client = new redis("rediss://stackhero:pqGoqZ8qSguOohMYoXxKZrK5omkzxH0fb4UMsmg8knPcVOMt4QL8q3I2vpZa7wDY@r98enr.stackhero-network.com:6380");

client.on("error", (error) => {
  console.error(error);
})


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
        client.set(`${id}`, 14200, JSON.stringify(recipe.data));
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
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${(number-1)*30}&limit=${30}`);

        // save the record in the cache for subsequent request
        client.set(`${search}${number}`, 20000, JSON.stringify(recipe.data));

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
        const ruta = (`https://api.mercadolibre.com/sites/MLA/search?q=${search}&sort=${price}&offset=${number}&limit=${30}`)
        const recipe = await axios.get(ruta);

        // save the record in the cache for subsequent request
        client.set(`${search}${number}${price}`, 1440, JSON.stringify(recipe.data));

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
        const ruta = (`https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${(number-1)*30}&limit=${30}${condition}`);
        console.log(ruta)
        const recipe = await axios.get(ruta)
        // save the record in the cache for subsequent request
        client.set(`${search}${number}${condition}`, 1440, JSON.stringify(recipe.data));

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

app.get('/seller', function(req, res) {    
  const { id } = req.query;
  try {
    // Check the redis store for the data first
    client.get(`seller${id}`, async (err, recipe) => {
      if (recipe) {
        return res.status(200).send({
          error: false,
          message: `Recipe for query: seller${id} from the cache`,
          data: JSON.parse(recipe)
        })
      } else { // When the data is not found in the cache then we can make request to the server
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?seller_id=${id}`);
        client.setex(`seller${id}`, 14200, JSON.stringify(recipe.data));
        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for query: seller${id} from the server`,
          data: recipe.data
        });
    }
  }) 
  } catch (error) {
    console.log(error);
  }
});




module.exports = app