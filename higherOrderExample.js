let arr = [11,34, 76,89,1]
let transform = (value => value * value )
let arr2 = arr.map( transform )
let stringifi = (value => value.toString())
let arr3 = arr.map( stringifi)
console.log(arr2)
console.log(arr3)

arr3.forEach( (value, index) =>  console.log(`item at index ${index} is now 1${value}`))


console.log(arr3.filter( value => value % 2 == 0))