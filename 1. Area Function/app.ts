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