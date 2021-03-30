const redis = require('ioredis');

const axios = require('axios')

const cat = require('./models/categories.js')
// const client = new Ioredis(process.env.STACKHERO_REDIS_URL_TLS)
const client = new redis("stackhero://admin:pqGoqZ8qSguOohMYoXxKZrK5omkzxH0fb4UMsmg8knPcVOMt4QL8q3I2vpZa7wDY@r98enr.stackhero-network.com:6379");
console.log((process.env.STACKHERO_REDIS_URL_TLS));
// const client = new redis(process.env.STACKHERO_REDIS_URL_TLS);
client.on("error", (error) => {
  console.error(error);
})

const getCategoriesRedis = (text, res) => {
  try {
    client.get(text, async (err, recipe) => {
      if (!err) {
        return res.status(200).send({
          error: false,
          message: `Recipe for ${text} from the cache`,
          data: cat
        })
      } else { // When the data is not found in the cache then we can make request to the server
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
  }catch (error) {
    res.status(404)
  }
}

const getProductsRedis = (text, res, route, type) => {
  try {
    // Check the redis store for the data first
    client.get(text, async (err, recipe) => {
      if(err) {
        console.log(err)
      }else if(recipe){
        return res.status(200).send({
          error: false,
          message: `Recipe for ${type}: ${text} from the cache`,
          data: JSON.parse(recipe)
        })
      } else { // When the data is not found in the cache then we can make request to the server
        const recipe = await axios.get(route);
        // save the record in the cache for subsequent request
        client.set(text, JSON.stringify(recipe.data));
        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for ${type}: ${text} from the server`,
          data: recipe.data
        });
      }
    })
  }catch(error) {
    console.log(error)
  }
  
}



module.exports = { 
  client,
  getCategoriesRedis, 
  getProductsRedis
}
