var num: number = 40 ;
var resp: string = "[";

primo2(num, 2);


function primo2(m:number, prim:number) {
    var i:number=0;
    while(i<m){
        if (verificar(prim,2)){
            if(i!=m-1) {
                resp+=prim+", ";
            }
            else { 
                resp+=prim+"]";
            }
            i+=1;
        }
        prim+=1;       
    }
    console.log(resp);
}

function verificar(n:number,div:number):boolean{
    if(n/2 < div)
        return true;
    else {
        if (n % div == 0){
            return false;
        }   
        return verificar(n, div+1);
    }
}