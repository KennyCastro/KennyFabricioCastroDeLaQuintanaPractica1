var pagos: number [][] = [
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [2, 0, 3, 3]
];


var total: number =0;


console.log(resultados());


function resultados(): number{
    for(var i:number = 0; i<pagos[0].length; i++) {
        for (var j: number = 0; j<pagos.length; j++) {
            if (pagos[j][i]== 0) {
                break;
            }
            else {
                total+=pagos[j][i];
            }
        }
    }
    return total;
}
