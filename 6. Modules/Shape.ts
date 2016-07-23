module Leccion6.Shapes {
    export interface IShape6 {
        getArea6(): number;
        showArea6();
    }

    export class BaseShape implements IShape6 {
        constructor(private type: string) { }

        public showMessage = (area: number): void => {
            var el = document.getElementById("content");
            var message = "I'm a " + this.type + " with an area of " + area + " cm squared.";

            var newEl = document.createElement("div");
            newEl.innerHTML = message;

            el.appendChild(newEl);
        }

        getArea6(): number {
            throw "No implementado";
        }

        showArea6(): void {
            var area = this.getArea6();
            this.showMessage(area);
        }
    }
}