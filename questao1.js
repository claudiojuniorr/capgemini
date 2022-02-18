let escada = function(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push("*".repeat(i)); 
    }
    for (const valor of array) {
        console.log(valor.padStart(n, " ")); 
    }
}
// Entrada de valores
escada(6)