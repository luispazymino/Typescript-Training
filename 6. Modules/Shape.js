var Leccion6;
(function (Leccion6) {
    var Shapes;
    (function (Shapes) {
        var BaseShape = (function () {
            function BaseShape(type) {
                var _this = this;
                this.type = type;
                this.showMessage = function (area) {
                    var el = document.getElementById("content");
                    var message = "I'm a " + _this.type + " with an area of " + area + " cm squared.";
                    var newEl = document.createElement("div");
                    newEl.innerHTML = message;
                    el.appendChild(newEl);
                };
            }
            BaseShape.prototype.getArea6 = function () {
                throw "No implementado";
            };
            BaseShape.prototype.showArea6 = function () {
                var area = this.getArea6();
                this.showMessage(area);
            };
            return BaseShape;
        }());
        Shapes.BaseShape = BaseShape;
    })(Shapes = Leccion6.Shapes || (Leccion6.Shapes = {}));
})(Leccion6 || (Leccion6 = {}));
