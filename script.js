// Basic operators

let a = 1, b = 1;

let c = ++a;
let d = b++;

console.log(a, b, c, d) // 2, 2, 2, 1

let x = 2;
let y = 1 + (x *= 2)

console.log(x, y) // 4, 5

console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(6/"3") // 2
console.log("2"*"3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log(3 + "3") // 33
console.log("  -9  " - 3) // -12
console.log("  -9 " + 5) // -9 5
console.log(null + 1) // 1
console.log(undefined  + 1) // NaN
console.log("\t \n" - 2) // -2
