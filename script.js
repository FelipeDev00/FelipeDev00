var nome = prompt('Digite seu nome para acessar a pagina:')
while ( nome!= 'Rocky') {
    alert('Você não é o desenvolvedor desse site. Portfólio em desenvolvimento...')
    nome = prompt('Digite seu nome para acessar a pagina:')
}
alert('Acesso liberado, bem vindo, Felipe!')
var fnome = prompt('Digite seu nome:')

function carregar() {
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Bom dia, ${fnome}!`}
        else if (hora >=12 && hora < 18){
            msg.innerHTML = `Boa tarde, ${fnome}!`
        }
        else
            {
            msg.innerHTML = `Boa noite, ${fnome}!`
        }
}
