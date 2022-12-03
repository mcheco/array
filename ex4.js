let numeros = [];
let num = 0;
let contador = 0;

for(let i = 0; i < 0; i++) {
    numeros.push(parseInt(prompt(`Entre com o valor na posição ${i}`)))
}

num = parseInt(prompt(`Entre com um número`));

for(let i = 0; i < 15; i++){
    if (numero[i] == num){
        contador++;
    }
}

console.log(`O númerp ${num} aparece ${contador} vezes no array`);