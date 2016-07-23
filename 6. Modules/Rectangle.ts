/// <reference path="Shape.ts" />

module Leccion6.Shapes {
    export class Rectangle6 extends BaseShape  {
        constructor(private width: number, private height: number) {
            super("Square");
        }

        getArea6():number{
            return this.width * this.height;
        }
    }
}