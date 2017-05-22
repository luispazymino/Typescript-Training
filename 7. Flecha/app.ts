//Función de call back de forma normal
setInterval(function() {
    console.log("Hola dsde función call back");
},5000);

//Función de tipo fecha
setInterval((variable1:string, variable2:number) => {
    console.log("Hola dsde función fecha");
},1000);

//Recorrer un array usando una función fecha
var frutas:Array<string> = ["platano","piña","toronja"];

var recorrer = frutas.map(fruta => {
    console.log(fruta);
});