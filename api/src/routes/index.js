
const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');


var router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/api', productRouter);
// 


module.exports = router;