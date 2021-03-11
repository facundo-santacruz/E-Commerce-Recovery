const redis = require('redis');
// make a connection to the local instance of redis
const client = redis.createClient(6379);




exports.module= client