const app = require('express').Router();
const axios = require('axios')
const cat = require('../models/categories')

// const  client = require('../redis')
const redis = require('ioredis');
// const client = new Ioredis(process.env.STACKHERO_REDIS_URL_TLS)
// const client = new redis("redis://admin:pqGoqZ8qSguOohMYoXxKZrK5omkzxH0fb4UMsmg8knPcVOMt4QL8q3I2vpZa7wDY@r98enr.stackhero-network.com:6379");
const client = new redis("rediss://stackhero:pqGoqZ8qSguOohMYoXxKZrK5omkzxH0fb4UMsmg8knPcVOMt4QL8q3I2vpZa7wDY@r98enr.stackhero-network.com:6380");

client.on("error", (error) => {
  console.error(error);
})

 const objeto = (myObj) => {

    for (var key in myObjj) {

        console.log(key);
        console.log(myObj[key]);
      }
 }

app.get('/filter', function(req, res) {
    objeto(req.query)
        try {
        const { search, value, number, categoria } = req.query;
        // Check the redis store for the data first
        client.get(`${search} ${categoria}=${value}${number}`, async (err, recipe) => {
            if (recipe) {
            console.log("si existe en la cache");
            return res.status(200).send({
                error: false,
                message: `Recipe for query:${search} ${categoria}=${value} offset:${number} from the cache`,
                data: JSON.parse(recipe)
            })
            } else { // When the data is not found in the cache then we can make request to the server
            console.log("no existe en la cache");
            const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&${categoria}=${value}&offset=${number}&limit=${30}`);

            // save the record in the cache for subsequent request
            client.setex(`${search} ${categoria}=${value}${number}`, 20000, JSON.stringify(recipe.data));

            // return the result to the client
            return res.status(200).send({
                error: false,
                message: `Recipe for query:${search} ${categoria}=${value} offset:${number} from the server`,
                data: recipe.data
            });
        }
        })
    } catch (error) {
        console.log(error)
    }
});

app.get('/filtercat', function(req, res) {
    console.log(req.query);
        try {
        const { search, value, number, categoria } = req.query;
        // Check the redis store for the data first
        client.get(`${search} ${categoria}=${value}${number}`, async (err, recipe) => {
            if (recipe) {
            console.log("si existe en la cache");
            return res.status(200).send({
                error: false,
                message: `Recipe for categorie:${search} ${categoria}=${value} offset:${number} from the cache`,
                data: JSON.parse(recipe)
            })
            } else { // When the data is not found in the cache then we can make request to the server
            console.log("no existe en la cache");
            const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?categorie=${search}&${categoria}=${value}&offset=${number}&limit=${30}`);

            // save the record in the cache for subsequent request
            client.setex(`${search} ${categoria}=${value}${number}`, 20000, JSON.stringify(recipe.data));

            // return the result to the client
            return res.status(200).send({
                error: false,
                message: `Recipe for categorie:${search} ${categoria}=${value} offset:${number} from the server`,
                data: recipe.data
            });
        }
        })
    } catch (error) {
        console.log(error)
    }
});


module.exports = app