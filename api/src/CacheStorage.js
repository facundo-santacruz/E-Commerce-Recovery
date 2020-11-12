// import axios from 'axios';

// export function addStorage (url){
//         axios.get(url).then(function(response) {
//         const jsonResponse = new Response(JSON.stringify(response.data), {
//             headers: {
//                 'content-type': 'application/json'
//             }
//         });
//         let  n= JSON.stringify(url)
//         caches.open(n).then(cache => cache.put(n, jsonResponse));
//         return response
//         })   
//     .catch(err => console.log(err))
// }

// export function loadStorage (name){
//     return caches.match(JSON.stringify(name)).then(r =>r.json())}

// Try to get data from the cache, but fall back to fetching it live.
// async function getData(url, add) {
//     const cacheVersion = 1;
//     const cacheName    = `myapp-${ cacheVersion }`;
//     const url          = 'https://jsonplaceholder.typicode.com/todos/1';
//     let cachedData     = await getCachedData( cacheName, url );
 
//     if ( cachedData ) {
//        console.log( 'Retrieved cached data' );
//        return cachedData;
//     }
 
//     console.log( 'Fetching fresh data' );
 
//     const cacheStorage = await caches.open( cacheName );
//     await cacheStorage.add( url );
//     cachedData = await getCachedData( cacheName, url );
//     // await deleteOldCaches( cacheName );
 
//     return cachedData;
//  }
 
//  // Get data from the cache.
//  async function getCachedData( cacheName, url ) {
//     const cacheStorage   = await caches.open( cacheName );
//     const cachedResponse = await cacheStorage.match( url );
 
//     if ( ! cachedResponse || ! cachedResponse.ok ) {
//        return false;
//     }
 
//     return await cachedResponse.json();
//  }
 