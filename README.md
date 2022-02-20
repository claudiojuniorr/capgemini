<h1>Capgemini</h2>
<h2><b>DESAFIO DE PROGRAMAÇÃO - ACADEMIA CAPGEMINI</b></h2>

<b>A resolução das questões foram feitas na linguagem JavaScript.</b>

<h3><b>Questão 1</b></h3>

Criado uma função anônima cujo nome é escada, no qual recebe um parâmetro.

```js
let escada = function(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push("*".repeat(i)); 
    }
    for (const valor of array) {
        console.log(valor.padStart(n, " ")); 
    }
}
```

<b>Parte um do código:</b>
```js
for (let i = 0; i < n; i++) {
        array.push("*".repeat(i));
```
<b>Explicação:</b> 

Para cada valor da range(0, n) o método <code>repeat()</code> irá construir e retorna uma nova string com um determinado número de cópias concatenadas do caracter '*'. 
Retornado a nova string, o método <code>push()</code> irá adicionar o elemento no array.

<b>Parte dois do código:</b>
```js
for (const valor of array) {
        console.log(valor.padStart(n, " ")); 
```        
<b>Explicação:</b>

Para cada valor do array, o método <code>padStart()</code> irá adicionar antes do caracter '*' um espaço vazio.

<b>Entrada:</b>
```js
escada(6)
```

<b>Saída:</b>

     * <br />
    ** <br />
   *** <br />
  **** <br />
 ***** <br />

<h3><b>Questão 2</b></h3>

Criado uma função anônima cujo nome é cadastro, no qual recebe uma string como parâmetro.
```js
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
```
<b>Parte um do código:</b>
```js
if (tamanhoSenha < 6){
        let menorQueSeis = 6 - tamanhoSenha;
        return menorQueSeis;
```
<b>Explicação:</b>

Verifica se o tamanho da senha é menor que 6, caso sim, retorna o número de caracter necessário para ser adicionado a senha a fim de tornar mais segura. 

<b>Parte dois do código:</b>

```js
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
```
<b>Explicação:</b>

Para a senha inserida o método <code>test()</code> executa uma busca por uma correspondência entre uma expressão regular e uma string. Retorna <code>true</code> ou <code>false</code>.
Se a senha atender todos os requisitos, retorna a mensagem "Senha atende aos requisitos".

<b>Entrada 1:</b>
```js
console.log(cadastro('asd'));
```

<b>Saída 1:</b>

<code>3</code>

<b>Entrada 2:</b>
```js
console.log(cadastro('adwrsd'));
```


<b>Saída 2:</b>
Senha Fraca: <br />
    Adicione pelo menos 1 letra minúscula. <br />
    Adicione pelo menos 1 letra maiúscula. <br />
    Adicione pelo menos 1 dígito. <br />
    Adicione pelo menos 1 caracter especial. Os caracteres especiais são: !@#$%^&*()-+ <br />    
    
 <b>Entrada 3:</b>
```js
console.log(cadastro('A#3rsd'));
```

<b>Saída 3:</b>

<code>Senha atende aos requisitos</code>
