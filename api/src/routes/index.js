

const { Router } = require('express');
const productRouter = require('./product.js');
const categoryRouter = require('./category.js');
const filterRouter = require('./filter.js');
const router = Router();



router.use('/products', productRouter);
router.use('/category', categoryRouter);
router.use('/filter', filterRouter)

module.exports = router