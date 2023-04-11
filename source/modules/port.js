require('dotenv').config()
console.log('port', process.env.PORT);
module.exports = {
    port: process.env.PORT || 8020,
    callback: function(){
        console.log("Abriendo el servidor http://localhost:8020")
    }
}