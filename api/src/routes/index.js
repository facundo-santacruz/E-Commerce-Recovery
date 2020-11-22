// const { Router } = require('express');
// const productRouter = require('./product.js');

// const redis = require('redis');
// // make a connection to the local instance of redis
// const client = redis.createClient(6379);


// client.on("error", (error) => {
//   console.error(error);
//  });
 
// // const { Router } = require('express');
// // import all routers;


// var router = Router();

// // load each router on a route
// // i.e: router.use('/auth', authRouter);
// // router.use('/auth', authRouter);
// router.use('/api', productRouter);
// // 


// module.exports = {
//   router,
//   client
// }

const { Router } = require('express');
const productRouter = require('./product.js');
const categoryRouter = require('./category.js');
const filterRouter = require('./filter.js');
const router = Router();



router.use('/products', productRouter);
router.use('/category', categoryRouter);
router.use('/filter', filterRouter)
// router.get('/', (req, res) => {
//   res.send("Hi World")
// })

module.exports = router