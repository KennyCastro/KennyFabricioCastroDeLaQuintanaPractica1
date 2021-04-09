let cadena: string = "hola como estas";
invertida(cadena)


function invertida(cad: string) {
    let inv:string = "";
    for(var i = cad.length - 1; i>=0; i--) {
         inv+=cad.charAt(i);
    }
    console.log(inv);
}