// !-----------------Scoope of variable---------
// ?statement Block
// if(true)
// {
//     // !global scope
//     var a=10
//     // ! local scope
//     let b=20
//     const c=30
//     console.log(a,b,c);
// }

// console.log(a)//10
// console.log(b)//error
// console.log(c)//error

// ? function Block
// function num(){
    // ! local scope
//     var a=100
//     let b=200
//     const c=300
//     console.log(a,b,c);
//     return b;
// }
// let x =num()
// console.log(x);


//  todo: variable Hosting
// var a; //dec
// a=100;//init
// console.log(a);
// b=200 //init
// var b;//dec
// console.log(b);


// let c;//dec
// c=300
// console.log(c)


// d=400;//init
// let d;//dec
// console.log(d)


// todo: function Hoisting
// fun()
// function fun(){
//     console.log("Hello")
// }

// x()
// var x=()=>{
//     console.log("hi")
// }






// !--*************Destructring*************

// ?Array
// ?Object
// todo: Array Destructring
// let place=['nagwara','Goa','Kerala','Thiland','Manglore']
// console.log(`My fav place is ${place[1]}`);
// let [nag,goa,ker,thi,man]=place;
// console.log(`My fav place is ${goa}`)

// todo: Object Destructring
// let person={
//     fun: "Dinga",
//     lnm:"Raja",
//     dob:1990,
//     place:'Goa'
// };
// console.log(person);
// console.log(`${person.fnm} ${person.lnm} is from ${person.place}`);//without Destructring

// let {fnm,lnm,dob,place}=person;
// console.log(`${fnm} ${ lnm} is from ${place}`);//with Destructring

// let arr=[100,200,300,400,500]
// // for in
// for(let key in arr)
// {console.log(key);// index position :0,1,2,3,4
// }

// // for of 
// for(let key of arr){
//     console.log(key);//Array element : 100,200,300,400,500
// }

let person={
    fun: "Dinga",
    lnm:"Raja",
    dob:1990,
    place:'Goa'
};
for(let key in person){
    console.log(key)
}
//*in object of  is not working it will give error
// for(let key of person){
//     console.log(key)
// }
for(let key in person){
    console.log(`${key} ${person[key]}`)
}