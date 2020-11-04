const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const  force = true;
conn.sync({ force }).then(() => {
    server.listen(3001, () => {
        console.log("Server listening at port 3001")
    })
})