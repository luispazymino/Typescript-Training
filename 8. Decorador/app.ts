function arranque(lanzar:string){
    return function(target: Function){
        target.prototype.lanzamiento = function(): void {
            alert(lanzar);
        }       
    }
};

@arranque('Bienvenidos al sistema desde el decorador')
class Programa {
    private nombre:string;
}

var variable = new Programa();
variable.lanzamiento();


//Recorrer un array usando una función fecha
var frutas:Array<string> = ["platano","piña","toronja"];

var recorrer = frutas.map(fruta => {
    console.log(fruta);
});