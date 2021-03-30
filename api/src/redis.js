const redis = require('ioredis');

const cat = require('./models/categories.js')
// const client = new Ioredis(process.env.STACKHERO_REDIS_URL_TLS)
const client = new redis("redis://admin:pqGoqZ8qSguOohMYoXxKZrK5omkzxH0fb4UMsmg8knPcVOMt4QL8q3I2vpZa7wDY@r98enr.stackhero-network.com:6379");
console.log((process.env.STACKHERO_REDIS_URL_TLS));
// const client = new redis(process.env.STACKHERO_REDIS_URL_TLS);
client.on("error", (error) => {
  console.error(error);
})

console.log(client)

const getCategoriesRedis = (text, res) => {
  try {
    client.get(text, async (err, recipe) => {
      if (!err) {
        console.log("si existe en la cache");
        return res.status(200).send({
          error: false,
          message: `Recipe for ${text} from the cache`,
          data: cat
        })
      } else { // When the data is not found in the cache then we can make request to the server
        console.log("no existe en la cache");
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

module.exports = { 
  client,
  getCategoriesRedis
}
