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
        var Rectangle6 = (function (_super) {
            __extends(Rectangle6, _super);
            function Rectangle6(width, height) {
                var _this = _super.call(this, "Square") || this;
                _this.width = width;
                _this.height = height;
                return _this;
            }
            Rectangle6.prototype.getArea6 = function () {
                return this.width * this.height;
            };
            return Rectangle6;
        }(Shapes.BaseShape));
        Shapes.Rectangle6 = Rectangle6;
    })(Shapes = Leccion6.Shapes || (Leccion6.Shapes = {}));
})(Leccion6 || (Leccion6 = {}));
