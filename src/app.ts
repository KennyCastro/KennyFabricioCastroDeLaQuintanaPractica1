var ipv4: string = "172.168.10.10";
var sub: string, inicio:number = 0, fin: number = 0, cont:number = 0;



verificar2();

function verificar2() {
    if(ipv4.length <=15 && ipv4.length >= 7){
        while(inicio<ipv4.length){
            var f:number = verpunto();
            if(f == inicio){
                console.log("false");
                break;
            }
            else{
                sub = ipv4.substring(inicio,fin);
                inicio = f+1;
                if(!validarentero(sub)){  
                    break;
                    
                }
                
                cont++;
            }
        }
        if(cont==4)
            console.log("true");
        else
        console.log("false");
    }
    else {
        console.log("false")
    }
    
}

function validarentero(o:string): boolean{
    var octeto:number = parseInt(o);
    if(!isNaN(octeto)){
        if(octeto < 0 || octeto>255)
        {
            
            //console.log("false")
            return false;
        }
        else{
            return true;
        }
    }
    else
        return false;
}



function verpunto(): number{
    for (var i:number = inicio;i<ipv4.length;i++){
        if(ipv4.charAt(i)=="." || i==ipv4.length-1){
            if (i==ipv4.length-1){
                fin=i+1;
            }
            else {
                fin=i;
            }
            
            break;
        }
    }
    return fin;

}