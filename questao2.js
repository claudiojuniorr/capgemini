let cadastro = function(senha){
    let tamanhoSenha= senha.length;
    const senhaFraca =    `Senha Fraca:
    Adicione pelo menos 1 letra minúscula.
    Adicione pelo menos 1 letra maiúscula.
    Adicione pelo menos 1 dígito.
    Adicione pelo menos 1 caracter especial. Os caracteres especiais são: !@#$%^&*()-+`;
    if (tamanhoSenha < 6){
        let menorQueSeis = 6 - tamanhoSenha;
        return menorQueSeis;
    } else {
        let maiusculo = /[A-Z]/.test(senha);
        let minusculo = /[a-z]/.test(senha);
        let caractereEspecial = /[^a-zA-Z 0-9]+/g.test(senha);
        let digito = /[0-9]/.test(senha);
        if (maiusculo && minusculo && digito && caractereEspecial){
            return 'Senha atende aos requisitos';
        } else {
            return senhaFraca;
        }
    } 
}
// Entrada de valores          
console.log(cadastro('Entrada'));
