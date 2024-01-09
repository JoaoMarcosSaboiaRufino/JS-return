const database = [
    {email: "teste1@gmail.com", password: "1123456781"},
    {email: "teste2@gmail.com", password: "2123456782"},
    {email: "teste3@gmail.com", password: "3123456783"},
    {email: "teste4@gmail.com", password: "4123456784"},
    {email: "teste5@gmail.com", password: "5123456785"},
    {email: "teste6@gmail.com", password: "6123456786"},
    {email: "teste7@gmail.com", password: "7123456787"},
    {email: "teste8@gmail.com", password: "8123456788"},
    {email: "teste9@gmail.com", password: "9123456789"}
]

const inputEmail = document.getElementById('emailUser')
const inputPassword = document.getElementById('senhaUser')
const button = document.getElementById('enviar')

function redirecionar() {
    window.location.href = 'https://account.ubisoft.com/pt-BR/login'
}

function verificar() {
    console.log('Estou aqui!')
    let statusverific = false

    for(let i = 0; i <= database.length-1; i++) {
        if(inputEmail.value === database[i].email && inputPassword.value === database[i].password) {
            statusverific = true
        } 

    }
    if( statusverific == true) {
        return redirecionar()
    } else {
        return alert('E-mail ou senha invalida!')
    }
}


button.addEventListener('click', verificar)