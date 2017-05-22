//Función de call back de forma normal
setInterval(function () {
    console.log("Hola dsde función call back");
}, 5000);
//Función de tipo fecha
setInterval(function (variable1, variable2) {
    console.log("Hola dsde función fecha");
}, 1000);
//Recorrer un array usando una función fecha
var frutas = ["platano", "piña", "toronja"];
var recorrer = frutas.map(function (fruta) {
    console.log(fruta);
});
