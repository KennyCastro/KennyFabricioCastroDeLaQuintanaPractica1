var vector :number[] = [3, 6, -2, 10, 7, 3];
var maximo:number = 0;

console.log(producto(0));



function producto(pos:number):number {
    if(pos>=vector.length-1)
        return maximo;
    else{
        if((vector[pos]*vector[pos+1])>maximo)
            maximo=vector[pos]*vector[pos+1];
        return producto(pos+1); 
    }
}