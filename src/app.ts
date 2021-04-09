var vector: number[] = [5,9,15,1,3,20];
var min:number = 0;
var max:number = 0;
console.log(minimo());


function minimo():number {
    for(var i=0; i<vector.length;i++) {
        if(i==0) {
            max=vector[i];
            min=vector[i];
        }
        else {
            if(vector[i]>max) {
                max = vector[i];
            }
            if(vector[i]<min) {
                min = vector[i];
            }
        }    
    }
    return calculos();
}

function calculos() :number{
    let faltantes:number=0;
    let respuesta:number=0;
    for(var i:number=min ; i<=max ; i++){
        for(var j:number =0; j<vector.length ; j++) {
            if(i != vector[j]) {
                faltantes++;
            }
            if(faltantes===vector.length){
                respuesta++;
                //console.log(i);
            }
        }
        faltantes=0;
    }
    return respuesta;
}