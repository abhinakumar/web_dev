// let obj={
//     name1:"value1",
//     name2:"value2"
// }
// console.log(obj)

// let car={
//     carName:"Bmw",
//     carColor:"Black",
//     carPrice:"40L",
//     carModel:"2020",
//     auto:true
// };
// console.log(car)
// console.log(typeof car)

// ! Accesingv the property of object
// todo: dot operator
// let cName=car.carName
// console.log("Car name= "+cName);

// todo: substring operator

// let cname=car["carName"]
// console.log("Car name= "+cname)

// !Modification (add , update,delete)
// ? syntx: objectName.propertyName = "new Value"
// car.carColor="Blue"
// console.log(car);
// todo : Adding Extra property to the object
// ? syntax objectName.newPropertyName="new value"
// car.regNo="KA 10 AB 1234"
// console.log(car)
// todo: Delete property to the object
// ? delete(keyword) objectName.propertyName
// delete car.carPrice
// console.log(car)

// ! creating object using NEW keyword

// let car= new Object()
// console.log(car);
// car.carName="KIA"
// car.model="2022"
// car.serise="seltos"
// car.noOfGear=4
// delete car.serise


// function Person(){
//     this.fname="Dinga"
// }
// let p1=new Person()
// console.log(typeof p1)
// console.log(p1)

// function Person(fun,lnm){
//     this.fname=fun;
//     this.lname=lnm;
// }
// let p1=new Person("Dinga" ,'raja')
// console.log(p1)
// let p2=new Person('Dingi','rani')
// console.log(p2)
// console.log(`My name is ${p1.fname} ${p1.lname}`)
// !Explicit Method
// function Num(value=0){
//     this.num=value;
// }
// let n1=new Num()
// console.log(n1)
// let n2=new Num(120)
// console.log(n2)
// ! inbuld Method
// let n3=new Number(120)
// console.log(n3)

// function Num(value=0){
//     this.number=value
//     return value

//  }
//  let n1=new Num(100)
//  console.log(n1)

//  let n2=Number(120)
//  console.log(n2)
//  let n3=Num(120)
//  console.log(n3)

// let s1=String('hai')
// console.log(s1)


// function Str(value=''){
//     this.msz=value
//     return value
// }
// let s2=Str("hello")
// console.log(s2+
//     )

// let doc={
//     write: function(text){
//         console.log(text);
//     }
// }
// doc.write("Hello")
// document.write("Hello")

// let person ={
//     fname:"Dinga",
//     lname:"Raja",
//     place:"Goa",
//     dob:1990,
//     calculateAge: function(){
//         let age =2024 - this.dob
//         console.log(`${this.fname} age is ${age}`);
//     }
// }
// console.log(`${person.fname} is from ${person.place}`);
// person.calculateAge()

// todo: Example
// let person={
//     calculateAge: function(fnm,dob){
//         let age=2024-dob;
//         console.log(`${fnm} age is ${age}`)
//     }
// }
// person.calculateAge("dinga",1990)
// person.calculateAge("Manga",1900)

// todo: Example to restrict parameter pass
// let person={
//     calculateAge: function(fnm= String(),dob =Number()){
//         let age=2024-dob;
//         console.log(`${fnm} age is ${age}`)
//     }
// }
// person.calculateAge("dinga","1990")
// person.calculateAge("Manga",1900)

