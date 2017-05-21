/// <reference path="Shape.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Leccion6;
(function (Leccion6) {
    var Shapes;
    (function (Shapes) {
        var Triangle6 = (function (_super) {
            __extends(Triangle6, _super);
            function Triangle6(width, height) {
                var _this = _super.call(this, "triangle") || this;
                _this.width = width;
                _this.height = height;
                return _this;
            }
            Triangle6.prototype.getArea6 = function () {
                return this.width * this.height / 2;
            };
            return Triangle6;
        }(Shapes.BaseShape));
        Shapes.Triangle6 = Triangle6;
    })(Shapes = Leccion6.Shapes || (Leccion6.Shapes = {}));
})(Leccion6 || (Leccion6 = {}));
