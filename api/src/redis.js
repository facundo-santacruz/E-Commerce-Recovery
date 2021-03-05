// export const redis = (text, link, num)=>{
//     client.get(`review${id}`, async (err, recipe) => {
//         if (recipe) {
//           return res.status(200).send({
//             error: false,
//             message: `Recipe for query:${id} from the cache`,
//             data: JSON.parse(recipe)
//           })
//         } else { // When the data is not found in the cache then we can make request to the server
//             const recipe = await axios.get(`https://api.mercadolibre.com/reviews/item/${id}`);
            
//             // save the record in the cache for subsequent request
//             client.setex(`review${id}`, 14200, JSON.stringify(recipe.data));
//             // return the result to the client
//             return res.status(200).send({
//                 error: false,
//                 message: `Recipe for query:${id} from the server`,
//                 data: recipe.data
//             });
//         }
//     }
// }