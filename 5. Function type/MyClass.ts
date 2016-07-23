
class MyClase {
    messaje: string = "Hola desde mi clase";

    //Funcion en formato arrow
    //Sirve para que javascript reconozca el this además se lo debe usar cuando se hace eventos
    propertyMethod = (): void => {
        console.log("Hola desde formato arrow");
        alert(this.messaje);
    }
    //Funcion en formato objeto en prototipo
    prototypeMethod(): void {
        console.log("Hola desde el metodo de prototipo");
        alert(this.messaje);
    }
}

//Llamada a la clase
var myObject = new MyClase();
var api = { //Para las llamadas desde html
    propertyMethod(){
        myObject.propertyMethod.call(this);
    },
    publicMethod(){
        myObject.prototypeMethod.call(this);
    }
}