var cad1: string = "ksadussss";
var cad2: string = "zdsdsa";
var total: number = 0;
var visitados : number [] = [];


for(var i: number = 0; i<= cad1.length-1; i++){
    total+=encontrar(cad1.charAt(i),0);
    //console.log(encontrar(cad1.charAt(i),0))
}

console.log(total);




function encontrar(caracter: string, posicioncad2: number) : number{
    if (posicioncad2 == cad2.length)
            return 0;
    else{
        if(caracter == cad2.charAt(posicioncad2)){
            for(var i:number = 0; i< visitados.length; i++){
                if(posicioncad2 == visitados[i]) {
                    return encontrar(caracter,posicioncad2+1);
                }
            }
            visitados.push(posicioncad2);
            return 1;
        }
        return encontrar(caracter,posicioncad2+1);
    }
}
