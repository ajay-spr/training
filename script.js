// Object basics

const user = {}

user.name = "John"
user.surname = "Smith"
user.name = "Pete"

delete user.name

const isEmpty = (obj) => {
    for(const key in obj) {return false}
    return true
}

console.log(isEmpty({}))
console.log(isEmpty(user))