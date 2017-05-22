//class for rendering shapes
var ShapeRendererI = (function () {
    function ShapeRendererI(shape) {
        var _this = this;
        this.shape = shape;
        this.showArea = function () {
            var message = "Yo soy un " + _this.shape.getNameI() + " ancho en area de " + _this.shape.getAreaI();
            var container = document.getElementById("content");
            var newDiv = document.createElement("div");
            newDiv.innerHTML = message;
            container.appendChild(newDiv);
        };
    }
    return ShapeRendererI;
}());
//Clase que implementa IShape
var SquareI = (function () {
    function SquareI(width, height) {
        this.width = width;
        this.height = height;
    }
    SquareI.prototype.getAreaI = function () {
        return this.width * this.height;
    };
    SquareI.prototype.getNameI = function () {
        return "Square";
    };
    return SquareI;
}());
//Clase que implementa IShape
var TriangleI = (function () {
    function TriangleI(width, height) {
        this.width = width;
        this.height = height;
    }
    TriangleI.prototype.getAreaI = function () {
        return (this.width * this.height) / 2;
    };
    TriangleI.prototype.getNameI = function () {
        return "Triangle";
    };
    return TriangleI;
}());
//Funciones de prueba
function addSquareI() {
    //usa interface
    var newSq = new SquareI(Math.random(), Math.random());
    render(newSq);
}
function addTriangleI() {
    var newTq = new TriangleI(Math.random(), Math.random());
    render(newTq);
}
function render(shape) {
    var renderer = new ShapeRendererI(shape);
    renderer.showArea();
}
