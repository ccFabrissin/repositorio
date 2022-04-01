const autos = require("./autos");


const concesionaria = {
   autos: autos,
   buscarAuto: autos.filter(function(patente){
           return patente == this.patente;
       })
   }
;

console.log(concesionaria.buscarAuto());