let a=10
console.log(a)
console.log(typeof a)


//  inbult method
let n=100;
console.log(n)
console.log(typeof(n))

let n1=Number(true)
console.log(n1)//1
console.log(typeof n1)// number

let n2=Number('a')
console.log(n2)//NaN
console.log(typeof n2)//number

let hello;//undifine
let n3=Number(hello)//NaN
console.log(typeof n3)//number

let n4=Number(undefined)//NaN
console.log(typeof n4);//number

let n5=Number(null)
console.log(n5)//0
console.log(typeof n5);//number



//string()
let s1=String('hello')
console.log(s1)
console.log(typeof s1)

let s2=String(100)
console.log(s2)
console.log(typeof s2)

let s3=String(true)
console.log(s3)
console.log(typeof s3)

let s4=String(undefined)
console.log(s4)
console.log(typeof s4)


//todo boolen()
let b1=Boolean(true)
console.log(b1)
console.log(typeof b1)

let b2=Boolean('a')
console.log(b2)
console.log(typeof b2)

let b3=Boolean(!'abc')
console.log(b3)
console.log(typeof b3)

let b4=Boolean(true)
console.log(b4)

let bool=true
let b5=Boolean(!bool)
console.log(b5)
console.log(typeof b5)

