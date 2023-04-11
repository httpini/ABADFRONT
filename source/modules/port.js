require('dotenv').config()
let PORT = process.env.PORT
console.log('port', PORT);
module.exports = {
    port: PORT || 8020,
    callback: function(){
        console.log(`Abriendo el servidor http://localhost:${PORT}`)
    }
}