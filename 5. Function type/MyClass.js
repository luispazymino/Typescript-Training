var MyClase = (function () {
    function MyClase() {
        var _this = this;
        this.messaje = "Hola desde mi clase";
        //Funcion en formato arrow
        //Sirve para que javascript reconozca el this además se lo debe usar cuando se hace eventos
        this.propertyMethod = function () {
            console.log("Hola desde formato arrow");
            alert(_this.messaje);
        };
    }
    //Funcion en formato objeto en prototipo
    MyClase.prototype.prototypeMethod = function () {
        console.log("Hola desde el metodo de prototipo");
        alert(this.messaje);
    };
    return MyClase;
}());
//Llamada a la clase
var myObject = new MyClase();
var api = {
    propertyMethod: function () {
        myObject.propertyMethod.call(this);
    },
    publicMethod: function () {
        myObject.prototypeMethod.call(this);
    }
};
