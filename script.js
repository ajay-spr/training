function makeUser() {
    return {
        name: "John",
        ref: this // "window" as makeUser is not a method of any object
    }
}
let user = makeUser()
console.log(user.ref) // window object


// Calculator
const calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = +prompt("Enter a:")
        this.b = +prompt("Enter b:")
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a*this.b
    }
}


calculator.read()

alert(calculator.sum())
alert(calculator.mul())