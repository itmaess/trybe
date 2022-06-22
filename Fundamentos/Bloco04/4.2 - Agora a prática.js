// 1. Questão

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// 2. Questão

let sum = null;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}

console.log(sum)

// 3. Questão

console.log(sum / numbers.length)

// 4. Questão

if (sum / numbers.length > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

// 5. Questão

let maiorValor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorValor) {
        maiorValor = numbers[i]
    }
}

console.log(maiorValor)

// 6. Questão

let impares = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        impares++
    }
}

console.log(impares)

// 7. Questão

let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menorValor) {
        menorValor = numbers[i]
    }
}

console.log(menorValor)

// 8. Questão

let arr = []

for (let i = 1; i <= 25; i++) {
    arr.push(i)
}

console.log(arr)

// 9. Questão

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] / 2)
}