// For of - Repetição
// index          0, 1,  2,   3,  4,  5,  6,  7,  8,  9,  10
const numeros = [10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101];

for (const numero of numeros) {
    console.log(numero);
    // For of   10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101
}

for (const numero in numeros) {
    console.log(numero);
    console.log(numeros[numero]);
    // For in   0, 1,  2,   3,  4,  5,  6,  7,  8,  9,  10
}

for (let i = 0; i < 11; i++) {
    console.log(numeros[i]);
}