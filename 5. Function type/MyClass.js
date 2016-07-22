var MyClass = (function () {
    function MyClass() {
        var _this = this;
        this.messaje = "Hola desde mi clase";
        //Funcion en formato arrow
        this.propertyMethod = function () {
            console.log("Hola desde formato arrow");
            alert(_this.messaje);
        };
    }
    //Funcion en formato objeto en prototipo
    MyClass.prototype.prototypeMethod = function () {
        console.log("Hola desde el metodo de prototipo");
        alert(this.messaje);
    };
    return MyClass;
}());
//Llamada a la clase
var myObject = new MyClass();
var api = {
    propertyMethod: function () {
        myObject.propertyMethod.call(this);
    },
    prototypeMethod: function () {
        myObject.prototypeMethod.call(this);
    }
};
