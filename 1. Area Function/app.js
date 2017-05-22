function getAreaf(shape, width, height, show) {
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
var lang = ["php", "java", "css"];
alert(lang);
getAreaf("square", 12, 34, true);
//getArea("square","34",45,true);  //Error por tipado. Javascript no hay error pero typescript SI
//LET declara una variable solo para la función o bloque donde es utilizada
//VAR declara una variable para uso global
var a = 7;
var b = 8;
if (a == 7) {
    var a_1 = 10;
    var b_1 = 11;
    alert("Valores del bloque:" + a_1 + " " + b_1);
}
alert("Valores Globales:" + a + " " + b);
