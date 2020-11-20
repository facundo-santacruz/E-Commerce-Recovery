var express = require('express')
var http = require('http')
var app = express()
const axios = require('axios')
var cors = require('cors')
const { response } = require('express')
var list = []
var cat = [
  { "id": "MLA5725","name": "Accesorios para Vehículos","picture": "http://resources.mlstatic.com/category/images/6fc20d84-2ce6-44ee-8e7e-e5479a78eab0.png",},
  {"id": "MLA1512","name": "Agro","picture": "http://resources.mlstatic.com/category/images/311380fe-3734-4322-bb71-c956fcfe627d.png"},
  {"id": "MLA1403","name": "Alimentos y Bebidas", "picture": "http://resources.mlstatic.com/category/images/39e2dcb4-05b0-4f36-9f22-7c5bc6eb180e.png"},
  {"id": "MLA1071","name": "Animales y Mascotas",  "picture": "http://resources.mlstatic.com/category/images/0b18438b-f56c-421a-a020-f581f40f4c24.png"},
  {"id": "MLA1367","name": "Antigüedades y Colecciones","picture": "http://resources.mlstatic.com/category/images/ab8cfe0b-cb84-4d7b-bced-f32fcf96dab4.png"},
  {"id": "MLA1368","name": "Arte, Librería y Mercería","picture": "http://resources.mlstatic.com/category/images/b6f1c3e7-6c72-4f4a-a61b-4ea6c0241882.png"},
  {"id": "MLA1743","name": "Autos, Motos y Otros", "picture": "http://resources.mlstatic.com/category/images/e1a43666-ad57-4b8b-b405-f9d04dbbd8fc.png"},
  {"id": "MLA1384","name": "Bebés", "picture": "http://resources.mlstatic.com/category/images/c2d12ece-dc6b-4408-b6f7-23f797f900e3.png"},
  {"id": "MLA1246","name": "Belleza y Cuidado Personal","picture": "http://resources.mlstatic.com/category/images/d1c445e9-f3bb-49e8-8cd3-3cfa81e57cf9.png"},
  {"id": "MLA1051","name": "Celulares y Teléfonos", "picture": "http://resources.mlstatic.com/category/images/297acc79-be09-4446-be08-3938306e55d6.png"},
  {"id": "MLA1648","name": "Computación","picture": "http://resources.mlstatic.com/category/images/f96f9ecc-dfe6-4cf9-a270-4c0cee23f868.png"},
  {"id": "MLA1144","name": "Consolas y Videojuegos", "picture": "http://resources.mlstatic.com/category/images/9712b6d0-1570-4edc-aea6-c1c13c9a4bfa.png"},
  {"id": "MLA1276","name": "Deportes y Fitness","picture": "http://resources.mlstatic.com/category/images/b39de702-b427-4c05-b659-c6db6b87b53f.png"},
  {"id": "MLA5726","name": "Electrodomésticos y Aires Ac.","picture": "http://resources.mlstatic.com/category/images/104bbc6d-bf5c-4e84-8e17-93b8e6d16553.png"},
  {"id": "MLA1000","name": "Electrónica, Audio y Video", "picture": "http://resources.mlstatic.com/category/images/943ec641-717e-49cb-8a34-2f40ba367f5a.png"},
  {"id": "MLA2547","name": "Entradas para Eventos","picture": "http://resources.mlstatic.com/category/images/537b9145-ac07-43ec-a281-b5bdb442192c.png"},
  {"id": "MLA407134","name": "Herramientas y Construcción", "picture": "http://resources.mlstatic.com/category/images/783e7f75-e58d-4020-a165-827ec39c21ec.png"},
  {"id": "MLA1574","name": "Hogar, Muebles y Jardín","picture": "http://resources.mlstatic.com/category/images/5194ee98-9095-4ef6-b9a5-c78073fa60af.png"},
  {"id": "MLA1499","name": "Industrias y Oficinas","picture": "http://resources.mlstatic.com/category/images/5f192852-3896-474c-8c31-1c40080fa639.png"},
  {"id": "MLA1459","name": "Inmuebles","picture": "http://resources.mlstatic.com/category/images/cc0eed64-9cfb-4b78-9258-6266475f6427.png"},
  {"id": "MLA1182","name": "Instrumentos Musicales","picture": "http://resources.mlstatic.com/category/images/ec1323d4-1ba1-4de5-a4a2-1089d2cf0953.png"},
  {"id": "MLA3937","name": "Joyas y Relojes","picture": "http://resources.mlstatic.com/category/images/2f423cc0-af08-4d97-b9a4-d61d9524604c.png"},
  {"id": "MLA1132","name": "Juegos y Juguetes","picture": "http://resources.mlstatic.com/category/images/252f33d2-dae8-4eaf-a903-a41f02c504b4.png"},
  {"id": "MLA3025","name": "Libros, Revistas y Comics","picture": "http://resources.mlstatic.com/category/images/08fef13e-9eda-47ae-b56c-ee7bcc8ac762.png"},
  {"id": "MLA1168","name": "Música, Películas y Series", "picture": "http://resources.mlstatic.com/category/images/8b00e391-776a-4d39-8af4-ff6cf1d9e584.png"},
  {"id": "MLA1430","name": "Ropa y Accesorios","picture": "http://resources.mlstatic.com/category/images/eb722172-7d47-4a40-a65e-dab06e4f8ee6.png"},
  {"id": "MLA409431","name": "Salud y Equipamiento Médico","picture": "http://resources.mlstatic.com/category/images/d1c445e9-f3bb-49e8-8cd3-3cfa81e57cf9.png"},
  {"id": "MLA1540","name": "Servicios","picture": "http://resources.mlstatic.com/category/images/3b5619b2-cc62-4775-8e64-05a1e5585bba.png"},
  {"id": "MLA9304","name": "Souvenirs, Cotillón y Fiestas","picture": "http://resources.mlstatic.com/category/images/3af293a4-0866-4f65-98b5-923ae81529b2.png"},
  {"id": "MLA1953","name": "Otras categorías", "picture": "http://resources.mlstatic.com/category/images/783e7f75-e58d-4020-a165-827ec39c21ec.png"}
]
const redis = require('redis');
// make a connection to the local instance of redis
const client = redis.createClient(6379);


client.on("error", (error) => {
  console.error(error);
 });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send(users)
})

//------------------BUSCA UNA QUERY CON UN LIMITE DE 30 UNIDADES----------------------------
//------------------Y LO GUARDA EN LA CACHE SI NO SE HIZO LA PETICION-----------------------

app.get('/categories', function(req,res){
  console.log(cat)
  // return res.status(200). send(cat)
  try {
    // const { search, number } = req.query;
    // console.log(`${search}${number}`);
    // Check the redis store for the data first
    client.get(`categories`, async (err, recipe) => {
      if (recipe) {
        console.log("si existe en la cache");
        return res.status(200).send({
          error: false,
          message: `Recipe for categories from the cache`,
          data: cat
        })
      } else { // When the data is not found in the cache then we can make request to the server
        console.log("no existe en la cache");
        // const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/categories`);

        // save the record in the cache for subsequent request
        client.setex(`categories`, 2000, JSON.stringify(cat));

        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe  categories from the server`,
          data: cat
        });
    }
  }) 
} catch (error) {
    console.log(error)
}
});
// })
//------------------BUSCA UNA QUERY  1ra BUSQUEDA CON UN LIMITE DE 30 UNIDADES----------------------------
//------------------Y LO GUARDA EN LA CACHE SI NO SE HIZO LA PETICION-----------------------


app.get('/api/search', function(req, res) {    
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
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${number}&limit=${30}`);

        // save the record in the cache for subsequent request
        client.setex(`${search}${number}`, 20000, JSON.stringify(recipe.data));

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

app.get('/api/sortprice', function(req, res) {    
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
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&sort=${price}&offset=${number}&limit=${30}`);

        // save the record in the cache for subsequent request
        client.setex(`${search}${number}${price}`, 1440, JSON.stringify(recipe.data));

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

//----------------------BUSCAR POR CONDICION (usado o no)------------------------------------------------------

app.get('/api/condition', function(req, res) {    
  console.log(req.query)
  const { search, number, condition } = req.query
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
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${number}&limit=${30}&condition=${condition}`);

        // save the record in the cache for subsequent request
        client.setex(`${search}${number}${condition}`, 1440, JSON.stringify(recipe.data));

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

//----------------------BUSCAR UN PRODUCTO------------------------------------------------------

app.get('/api/product', function(req, res) {    
  const { id } = req.query
  console.log(id)
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
        const recipe = await axios.get(`https://api.mercadolibre.com/products/${id}`);
        
        // save the record in the cache for subsequent request
        client.setex(`${id}`, 14200, JSON.stringify(recipe.data));
        console.log(response)
        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${id} from the server`,
          data: recipe.data
        });
    }
  }) 
  } catch (error) {
    console.log(error)
  }
});


app.get('/api/category', function(req, res) {    
  const { id, number } = req.query
  console.log( req.query)
  try {
    // Check the redis store for the data first
    client.get(`${id}`, async (err, recipe) => {
      if (recipe) {
        return res.status(200).send({
          error: false,
          message: `Recipe for category:${id} from the cache`,
          data: JSON.parse(recipe)
        })
      } else { // When the data is not found in the cache then we can make request to the server
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${id}&offset=${number}&limit=${30}`);
        
        // save the record in the cache for subsequent request
        client.setex(`category=${id}`, 14200, JSON.stringify(recipe.data));
        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for category:${id} from the server`,
          data: recipe.data
        });
    }
  }) 
  } catch (error) {
    console.log(error)
  }
});


app.get('/api/sortpricecat', function(req, res) {    
  console.log(req.query)
  const { id, price, number } = req.query
  try {
    // Check the redis store for the data first
    client.get(`${id}${number}${price}`, async (err, recipe) => {
      if (recipe) {
        console.log("si existe en la cache");
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${id} offset:${number} orderby:${price} from the cache`,
          data: JSON.parse(recipe)
        })
      } else { // When the data is not found in the cache then we can make request to the server
        console.log("no existe en la cache");
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${id}&sort=${price}&offset=${number}&limit=${30}`);

        // save the record in the cache for subsequent request
        client.setex(`${id}${number}${price}`, 1440, JSON.stringify(recipe.data));

        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${id} offset:${number} orderby:${price} from the server`,
          data: recipe.data
        });
    }
  }) 
  } catch (error) {
    console.log(error)
  }
});

//----------------------BUSCAR POR CONDICION (usado o no) POR CATEGORIA------------------------------------------------------

app.get('/api/conditioncat', function(req, res) {    
  console.log(req.query)
  const { id, number, condition } = req.query
  try {
    // Check the redis store for the data first
    client.get(`${id}${number}${condition}`, async (err, recipe) => {
      if (recipe) {
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${id} offset:${number} condition:${condition} from the cache`,
          data: JSON.parse(recipe)
        })
      } else { // When the data is not found in the cache then we can make request to the server
        const recipe = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${id}&offset=${number}&limit=${30}&condition=${condition}`);

        // save the record in the cache for subsequent request
        client.setex(`${id}${number}${condition}`, 1440, JSON.stringify(recipe.data));

        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Recipe for query:${id} offset:${number} condition:${condition} from the server`,
          data: recipe.data
        });
    }
  }) 
  } catch (error) {
    console.log(error)
  }
});



app.get('/api/filter', function(req, res) {    
  console.log(req.query);
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



// https://api.mercadolibre.com/sites/MLA/search?category=MLA1055

app.get('/', (req, res) => {
  res.status(200).send("Welcome to MERCADO LIBRE'S API REST")
})

http.createServer(app).listen(3001, () => {
  console.log('Server started at http://localhost:3001');
});