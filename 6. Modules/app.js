/// <reference path="Rectangle.ts" />
/// <reference path="Triangle.ts" />
var Leccion6;
(function (Leccion6) {
    var Aplication = (function () {
        function Aplication() {
        }
        Aplication.prototype.addSquare6 = function () {
            var newSq = new Leccion6.Shapes.Rectangle6(Math.random() * 10, Math.random() * 10);
            newSq.showArea6();
        };
        Aplication.prototype.addTriangle6 = function () {
            // use interface
            var newSq = new Leccion6.Shapes.Triangle6(Math.random() * 10, Math.random() * 10);
            newSq.showArea6();
        };
        return Aplication;
    }());
    Leccion6.Aplication = Aplication;
    Leccion6.app = new Leccion6.Aplication();
})(Leccion6 || (Leccion6 = {}));
