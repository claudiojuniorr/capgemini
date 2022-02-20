<h1>Capgemini</h2>
<h2><b>DESAFIO DE PROGRAMAÇÃO - ACADEMIA CAPGEMINI</b></h2>

<b>A resolução das questões foram feitas na linguagem JavaScript.</b>

<h3><b>Questão 1</b></h3>

<b>Adicionando elementos no array:</b>
```js
for (let i = 0; i < n; i++) {
        array.push("*".repeat(i));
```
<b>Explicação:</b> 

Para cada valor da range(0, n) o método <code>repeat()</code> irá construir e retorna uma nova string com um determinado número de cópias concatenadas do caracter '*'. 
Retornado a nova string, o método <code>push()</code> irá adicionar o elemento no array.

<b>Retornando os elementos do array:</b>
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

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</p>  
<p>&nbsp;&nbsp;&nbsp;&nbsp;**</p>  
<p>&nbsp;&nbsp;&nbsp;***</p>   
<p>&nbsp;&nbsp;****</p>   
<p>&nbsp;*****</p>   

<h3><b>Questão 2</b></h3>

<b>Verificação do tamanho da senha:</b>
```js
if (tamanhoSenha < 6){
        let menorQueSeis = 6 - tamanhoSenha;
        return menorQueSeis;
```
<b>Explicação:</b>

Verifica se o tamanho da senha é menor que 6, caso sim, retorna o número de caracter necessário para ser adicionado a senha a fim de tornar mais segura. 

<b>Verificação da senha:</b>

Para a senha inserida é verificado se contém letra maiúscula, minúscula, dígito e caractes especiais. 
Se a senha atender todos os requisitos, retorna a mensagem "Senha atende aos requisitos".

<b>Entrada 1:</b>
```js
console.log(cadastro('asd'));
```

<b>Saída 1:</b>

3

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

Senha atende aos requisitos

<h3><b>Questão 3</b></h3>

Para verificar o número de anagramas de uma palavra foi necessário desenvolver duas funções a fim de realizar a permutação simples e com repetição. A partir desses dois cálculos foi permitido chegar ao resultado de números de anagramas possíveis. A função <code>caracterDuplicado()</code> verifica a repetição de caracteres de uma string a fim de descobrirmos o número de permutações com repetições, enquanto a função <code>fatorial()</code> retorna o número de permutações simples.

Após a realização dos cálculos é verificado em qual condição a string passada como parâmetro se encaixa e depois é adicionado cada carctere da string no arrayCaracter, a partir dessa array é chamado a função <code>arrayRandomizado()</code> que irá retornar o array com aleatoriedade, posto isso os elementos são concatenados e adicionado ao arrayAnagrama, para cada elemento que será adicionado dentro do arrayAnagrama é verificado se já existe a fim de evitar substrings repetidas.

 <b>Entrada 1:</b>
 
 ```js
console.log(retornaAnagrama('ovo'))
```

<b>Saída 1:</b>

2
