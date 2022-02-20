// Função para randomizar array
let arrayRandomizado = function(array) {
    // Loop em todos os elementos
    for (let i = array.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [array[i], array[j]] = [array[j], array[i]];
}
    // Retornando array com aleatoriedade
    return array;
}
// Retorna o número de caractere repetidos em uma string
let caracterDuplicado = function(string) {
    const caracterArray = {};
    // Mapeamos cada caractere da string ao nosso mapa.
    for (const caractere of string.toLowerCase()) {
        if (!caracterArray[caractere]) {
            caracterArray[caractere] = 1;
        } else {
            caracterArray[caractere] = caracterArray[caractere] + 1;
        }
    }  
    // Obtemos todos os valores do nosso mapa e os filtramos,
    // de modo a manter somente aqueles números maiores que 1.
    const valoresRepetidos = Object.values(caracterArray).filter((count) => count > 1);
    if (valoresRepetidos.length != 0){
        return valoresRepetidos.length;
    } 
    
}
// Retorna o número de anagramas da string
let fatorial = function(valor){
    let tamanho = valor.length
    let numeroDeAnagramas = 1
    for (let i = 1; i <= tamanho; i++){
        numeroDeAnagramas *= i    
    }
    return numeroDeAnagramas
}
// Parte principal do código
let retornaAnagrama = function(str){
    let arrayCaracter = []
    let arrayAnagrama = [str]
    for (const i in str){
        arrayCaracter.push(str[i])
    }
    let valor = 0
    if (caracterDuplicado(str) != 0){
        valor = fatorial(str) / fatorial(caracterDuplicado(str)) * fatorial(caracterDuplicado(str))      
    } else{
        valor = fatorial(str)
    }
    for (let i = 0; i <= valor; i++){
        arrayRandomizado(arrayCaracter)
        let anagrama = arrayCaracter.join('')
        for (let x of arrayAnagrama){
            while (x != anagrama){
                if(anagrama != x){
                    arrayAnagrama.push(anagrama)
                }else{
                    return
                }
            }

        }

    }
    return arrayAnagrama

}

console.log(retornaAnagrama('ovo'))