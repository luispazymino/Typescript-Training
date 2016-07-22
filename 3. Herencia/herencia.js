var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Declaración de clase padre
var ShapeHe = (function () {
    function ShapeHe(type) {
        this.type = type;
    }
    ShapeHe.prototype.showMessage = function () {
        var area = this.getArea();
        var message = "I'm a " + this.type + " with an area of " + area + " cm squared.";
        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        newDiv.innerHTML = message;
        container.appendChild(newDiv);
    };
    ShapeHe.prototype.getArea = function () {
        throw "No implementado";
    };
    return ShapeHe;
}());
//Declaración de clase hija con herencia
var SquareHe = (function (_super) {
    __extends(SquareHe, _super);
    function SquareHe(width, heigth) {
        _super.call(this, "square");
        this.width = width;
        this.heigth = heigth;
    }
    SquareHe.prototype.getArea = function () {
        return this.width * this.heigth;
    };
    return SquareHe;
}(ShapeHe));
//Declaración de clase hija2 con herencia 
var TriangleHe = (function (_super) {
    __extends(TriangleHe, _super);
    function TriangleHe(width, heigth) {
        _super.call(this, "triangle");
        this.width = width;
        this.heigth = heigth;
    }
    TriangleHe.prototype.getArea = function () {
        return (this.width * this.heigth) / 2;
    };
    return TriangleHe;
}(ShapeHe));
// Helper methods
function addSquareHe() {
    var newSq = new SquareHe(Math.random() * 10, Math.random() * 10);
    newSq.showMessage();
}
function addTriangleHe() {
    var newTn = new TriangleHe(Math.random() * 10, Math.random() * 10);
    newTn.showMessage();
}
