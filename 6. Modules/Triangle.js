/// <reference path="Shape.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Leccion6;
(function (Leccion6) {
    var Shapes;
    (function (Shapes) {
        var Triangle6 = (function (_super) {
            __extends(Triangle6, _super);
            function Triangle6(width, height) {
                _super.call(this, "triangle");
                this.width = width;
                this.height = height;
            }
            Triangle6.prototype.getArea6 = function () {
                return this.width * this.height / 2;
            };
            return Triangle6;
        }(Shapes.BaseShape));
        Shapes.Triangle6 = Triangle6;
    })(Shapes = Leccion6.Shapes || (Leccion6.Shapes = {}));
})(Leccion6 || (Leccion6 = {}));
