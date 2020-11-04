const server = require('express').Router();

server.get('/:id', (req, res) => {											//TRAE EL PRODUCTO DEL CORRESPONDIENTE ID
    var arr = [];
    // Product.findByPk(req.params.id, {
    //   include: {
    //     model: Category
    //   }
    // }).then(function (data) {
    //   for (let i = 0; i < data.categories.length; i++) {
    //     arr.push(data.categories[i].name)
    //   }
    //   console.log(data)
    //   res.json({
    //     name: data.name,
    //     description: data.description,
    //     price: data.price,
    //     stock: data.stock,
    //     image: data.image,
    //     categories: arr
    //   })
    // }).catch(err => {
    //   console.log('Error: ', err)
    //   res.send('No existe ese producto :(')
    // })
  })
  