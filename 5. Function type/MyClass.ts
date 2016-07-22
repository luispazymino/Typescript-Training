
class MyClass {
    messaje: string = "Hola desde mi clase";

    //Funcion en formato arrow
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
var myObject = new MyClass();
var api = { //Para las llamadas desde html
    propertyMethod(){
        myObject.propertyMethod.call(this);
    },
    prototypeMethod(){
        myObject.prototypeMethod.call(this);
    }
}