module Tienda{
    export class Ropa {
        constructor(public titulo:string){
            alert (titulo);
        }
    }

    export class Informatica {
        constructor(public titulo:string){
            alert ("Tienda de informatica: " + titulo);
        }
    }
}

import Informatica_Tienda = Tienda.Informatica;
let cargar_tienda = new Informatica_Tienda("Mi tienda luis");
