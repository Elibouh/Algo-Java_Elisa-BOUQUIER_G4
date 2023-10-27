
let student = {
    name: 'Yauhanne',
    favoriteFood: 'tacos',
    city: 'Norvege'
}

let values = Object.values(student)
let result = 0

values.forEach((value)=> {
    result +=value.length
})
console.log(result)