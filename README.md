# capgemini
<h1><b>DESAFIO DE PROGRAMAÇÃO - ACADEMIA CAPGEMINI</b></h1>

<b>A resolução das questões foram feitas na linguagem JavaScript.</b>

<h2><b>Questão 1</b></h2>

Criado uma função anônima cujo nome é escada, no qual recebe um parâmetro.

<code>let escada = function(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push("*".repeat(i)); 
    }
    for (const valor of array) {
        console.log(valor.padStart(n, " ")); 
    }
}</code>

<b>Parte um do código:</b>

<code>for (let i = 0; i < n; i++) {
        array.push("*".repeat(i));</code>
    
<b>Explicação:</b> 

Para cada valor da range(0, n) o método repeat() irá construir e retorna uma nova string com um determinado número de cópias concatenadas do caracter '*'. 
Retornado a nova string, o método push() irá adicionar o elemento no array.

<b>Parte dois do código:</b>

for (const valor of array) {
        console.log(valor.padStart(n, " ")); 
        
<b>Explicação:</b>

Para cada valor do array, o método padStart() irá adicionar antes do caracter '*' um espaço vazio.

<h2><b>Questão 2</b></h2>

Criado uma função anônima cujo nome é cadastro, no qual recebe uma string como parâmetro.

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

    
