let numeros = []

function sum(a) {
    
    let valortotal = 0
    
    if(a === 0 || a.length === 0) { 
        valortotal = 0
    } else { 
        for(let i = 0 ;i <= a.length - 1 ; i++){
        valortotal += a[i]
        }
    }
    return valortotal
}

console.log(sum(numeros))