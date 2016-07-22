interface IShape {
    /**
     * returns the shape's area in sq cms
     */
    getAreaI(): number;
    /**
     * return the shape's name
     */
    getNameI(): string;
}

//class for rendering shapes
class ShapeRendererI {
    constructor(private shape: IShape) {
    }

    public showArea = () => {
        var message = "Yo soy un " + this.shape.getNameI() + " ancho en area de " + this.shape.getAreaI();

        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        newDiv.innerHTML = message;
        container.appendChild(newDiv);
    }
}
//Clase que implementa IShape
class SquareI implements IShape {
    public constructor(private width: number, private height: number) {
    }

    getAreaI(): number {
        return this.width * this.height;
    }

    getNameI(): string {
        return "Square";
    }
}

//Clase que implementa IShape
class TriangleI implements IShape {
    public constructor(private width: number, private height: number) {
    }

    getAreaI(): number {
        return (this.width * this.height) / 2;
    }

    getNameI(): string {
        return "Triangle";
    }
}

//Funciones de prueba
function addSquareI() {
    //usa interface
    var newSq: IShape = new SquareI(Math.random(), Math.random());
    render(newSq);
}

function addTriangleI() {
    var newTq: IShape = new TriangleI(Math.random(), Math.random());
    render(newTq);
}

function render(shape: IShape) {
    var renderer = new ShapeRendererI(shape);
    renderer.showArea();
}