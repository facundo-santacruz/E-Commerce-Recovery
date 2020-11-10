import axios from 'axios';


export function addStorage (url, name){
    console.log(name)
        axios.get(url).then(function(response) {
        const jsonResponse = new Response(JSON.stringify(response.data), {
            headers: {
                'content-type': 'application/json'
            }
        });
        let  n= JSON.stringify(name)
        caches.open(n).then(cache => cache.put(n, jsonResponse));
        return jsonResponse;    
    })   
    .catch(err => console.log(err))
}

export function loadStorage (name){
    console.log(caches.match(name).then(r => r.json()))
    // return caches.match(name).then(r => r.json())
}

