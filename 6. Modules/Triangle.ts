/// <reference path="Shape.ts" />

module Leccion6.Shapes {
    export class Triangle6 extends BaseShape {
        constructor(private width: number, private height: number) {
            super("triangle");
        }

        getArea6(): number {
            return this.width * this.height / 2;
        }
    }
}