var palabra: string = "anitalavalatina";
console.log(palindromo(palabra));

function palindromo(cad:string):boolean {
    let newstring:string = "";
    for(var i = cad.length - 1; i>=0; i--) {
        newstring += cad.charAt(i);
    }
    if (palabra === newstring) {
        return true;
    } 
    //console.log(newstring);
    return false;
}