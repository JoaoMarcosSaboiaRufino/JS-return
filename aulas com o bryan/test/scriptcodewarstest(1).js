function verificador(name, owner) {
   
    let msg1 = 'Hello boss'
    let msg2 = 'Hello guest'

    let igual = name === owner
    if (igual === true) {
        return msg1
    } else {
        return msg2
    }
}

console.log(verificador(x, x))