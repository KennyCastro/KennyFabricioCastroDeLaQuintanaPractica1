let numero:number = 5;
console.log(primo(numero,2));

function primo (num: number, div:number):boolean {
    if(num/2 < div)
        return true;
    else {
        if (num % div == 0){
            return false;
        }   
        return primo(num, div+1);
    }
}
