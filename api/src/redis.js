const redis = require('ioredis');
// const client = new Ioredis(process.env.STACKHERO_REDIS_URL_TLS)
// const client = new redis("redis://admin:pqGoqZ8qSguOohMYoXxKZrK5omkzxH0fb4UMsmg8knPcVOMt4QL8q3I2vpZa7wDY@r98enr.stackhero-network.com:6379");
const client = new redis({
    host: 'r98enr.stackhero-network.com',
    port: '6379',
    user: 'admin',
    password: 'pqGoqZ8qSguOohMYoXxKZrK5omkzxH0fb4UMsmg8knPcVOMt4QL8q3I2vpZa7wDY'
});
client.on("error", (error) => {
  console.error(error);
})

exports.module = client