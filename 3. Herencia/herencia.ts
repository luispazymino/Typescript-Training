//Declaración de clase padre
class ShapeHe {

    constructor(private type: string) { }

    public showMessage() {
        var area = this.getArea();
        var message = "I'm a " + this.type + " with an area of " + area + " cm squared.";

        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        newDiv.innerHTML = message;
        container.appendChild(newDiv);
    }

    protected getArea(): number {
        throw "No implementado";
    }
}

//Declaración de clase hija con herencia
class SquareHe extends ShapeHe {
    constructor(private width: number, private heigth: number) {
        super("square");
    }

    getArea(): number {
        return this.width * this.heigth;
    }
}

//Declaración de clase hija2 con herencia 
class TriangleHe extends ShapeHe {
    public constructor(private width: number, private heigth: number) {
        super("triangle");
    }

    getArea(): number {
        return (this.width * this.heigth) / 2;
    }
}

// Helper methods
function addSquareHe() {
    var newSq: ShapeHe = new SquareHe(Math.random() * 10, Math.random() * 10);
    newSq.showMessage();
}

function addTriangleHe() {
    var newTn: ShapeHe = new TriangleHe(Math.random() * 10, Math.random() * 10);
    newTn.showMessage();
}