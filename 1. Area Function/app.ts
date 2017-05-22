function getAreaf(shape:string, width:number, height:number, show:boolean): number {
    var area = width * height;

    if (show) {
        var message = "I'm a " + shape + " with an area of " + area + " cm squared.";
        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        newDiv.innerHTML = message;
        container.appendChild(newDiv);
    }

    return area;
}

//Definición de array 
var lang: Array<string> = ["php","java","css"];

alert(lang); 

getAreaf("square", 12, 34, true);
//getArea("square","34",45,true);  //Error por tipado. Javascript no hay error pero typescript SI

//LET declara una variable solo para la función o bloque donde es utilizada
//VAR declara una variable para uso global

var a:number = 7;
var b:number = 8;

if (a == 7){
    let a = 10; let b = 11
     alert("Valores del bloque:" + a + " " + b);
}
 alert("Valores Globales:" + a + " " + b);