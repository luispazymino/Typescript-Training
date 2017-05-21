var Shape = (function () {
    function Shape(shape, width, heigth) {
        this.mShape = shape;
        this.mWidth = width;
        this.mHeigth = heigth;
    }
    Shape.prototype.showArea = function () {
        var area = this.getAreac();
        var message = "I'm a " + this.mShape + " with an area of " + area + " cm squared.";
        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        newDiv.innerHTML = message;
        container.appendChild(newDiv);
    };
    Shape.prototype.getAreac = function () {
        return this.mWidth * this.mHeigth;
    };
    return Shape;
}());
//Instanciar la clase
var shape = new Shape("squared", 10, 10);
shape.showArea();
