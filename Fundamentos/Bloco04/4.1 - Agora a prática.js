// 1. Questão

const a = 2;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2. Questão

if (a > b) {
    console.log(a)
} else if (a < b) {
    console.log(b)
} else {
    console.log("Os números possuem o mesmo valor.")
}

// 3. Questão

const c = 5;

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else if (c > a && c > b) {
    console.log(c)
} else {
    console.log("Os números possuem o mesmo valor.")
}

// 4. Questão

if (a > 0) {
    console.log("positive")
} else if (a < 0) {
    console.log("negative")
} else {
    console.log("zero")
}

// 5. Questão

const a1 = 45;
const a2 = 45;
const a3 = 90;

if (a1 === 0 || a2 === 0 || a3 === 0) {
    console.log("Error!")
} else if (a1 + a2 + a3 === 180){
    console.log(true)
} else {
    console.log(false)
}

// 6. Questão

let peca = "PeÃo";

if (peca.toLowerCase() === "rei") {
    console.log("Apenas uma casa para qualquer lado.")
} else if (peca.toLowerCase() === "rainha") {
    console.log("Move-se para qualquer casa em linha reta.")
} else if (peca.toLowerCase() === "bispo") {
    console.log("Move-se na diagonal")
} else if (peca.toLowerCase() === "cavalo") {
    console.log("Move-se em forma de L para qualquer direção.")
} else if (peca.toLowerCase() === "torre") {

} else {

}