class Shape {
    private mShape: string;
    private mWidth: number;
    private mHeigth: number;

    constructor(shape: string, width: number, heigth: number) {
        this.mShape = shape;
        this.mWidth = width;
        this.mHeigth = heigth;
    }

    public showArea() {
        var area = this.getAreac();
        var message = "I'm a " + this.mShape + " with an area of " + area + " cm squared.";

        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        newDiv.innerHTML = message;
        container.appendChild(newDiv);
    }

    protected getAreac(): number {
        return this.mWidth * this.mHeigth; 
    }
}

//Instanciar la clase
var shape = new Shape("squared", 10, 10);
shape.showArea();