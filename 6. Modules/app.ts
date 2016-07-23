/// <reference path="Rectangle.ts" />
/// <reference path="Triangle.ts" />

module Leccion6 {
    export class Aplication {
        addSquare6() {
            var newSq: Shapes.IShape6 = new Shapes.Rectangle6(Math.random() * 10, Math.random() * 10);
            newSq.showArea6();
        }

        addTriangle6() {
            // use interface
            var newSq: Shapes.IShape6 = new Shapes.Triangle6(Math.random() * 10, Math.random() * 10);
            newSq.showArea6();
        }
    }

    export var app = new Leccion6.Aplication();
}