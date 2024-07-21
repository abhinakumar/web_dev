// function add(){
//     let a=10
//     let b=20
//     let sum=a+b;
//     console.log(sum);

// }
// function add(a,b ){
    
//     let sum=a+b;
//     console.log(sum);

// }
// add(2,4);
// add(4,5);
// add(4,5);

// function demo(a){
//     console.log("a=" +a);
// }
// demo("Hai")
// demo(true)
// demo(100)
// demo()

// :Example 5
// function myname(fnm , lnm){
//     console.log("My name is "+ fnm+" "+lnm);
//     console.log("My name is",fnm,lnm);
//     // !Interpolation
//     console.log(`My name is ${fnm} ${lnm}`);
// }
// myname("Abhinav" ,"Kumar")

// function printDetails(fname,lname,age,place,degree ,stream){
//     console.log(`${fname} ${lname} age is ${age} place is ${place} Degree ${degree} Stream ${stream} `);
// }
// printDetails("Abhinav" ,"Kumar",23,"Samastipur","Btech","CSE")
// !passing defalt value for the parametr
// function fun(x=100){
//     console.log(x); 
   
// }
// function fun(x=200, y=220){

//     console.log(x+y); 
    
// }
// fun(111)
//  fun(420,239)
// todo: Example
// function fun(a,b,c=420){
//     b='is';
//     console.log(a,b,c);
// }
// fun('Dinga')
//  ? function without parameter & with return value
// function foo(){
//     let a=10
//     console.log("a= ",a);
//     return a;
// }
// let x=foo()
// console.log("x= ",x);
 
// function add(){
//     let a=10;
//     let b=20;
//     return (a+b);
// }
// let a=add()
// console.log(a);

// function add(){
//     let a=10;
//     let b=20;
//     return `${a}+${b}=${a+b}`;
// }
// let a=add()
// console.log(a);
// ?function with parameter and with return value
// function add(a,b){
//     let sum=a+b
//     return `${a}+${b}=${sum}`
// } 
// let res=add(100,200)
// console.log(res);
// todo: wap to check even or odd by using genral function with parameter & return value
// function oddEven(n){
//     // if(n%2==0)
//     // return `${n} is Even number`;
//     // else
//     // return `${n} is Odd number`; 
//     return n%2==0? `${n} is Even number`:`${n} is Odd number`;
// }
//  let num=oddEven(3);
//  console.log(num)
//  todo :WAP to print even number from 25-50 by using genral function with parameter
// todo & without return value
// function even(num ,num1){
//     for(let i=num;i<=num1;i++)
//     if(i%2==0)
//     console.log(i);
// }
// even(25,50);
// function myname(){
//     let fname=prompt("Enter first name ")
//     let lname=prompt("Enter last name")
//     console.log(`My name is ${fname} ${lname}`);
// }
// myname()
// function myname(){
//     let fname=prompt("Enter first name ")
//     let lname=prompt("Enter last name")
//     alert(`My name is ${fname} ${lname}`);
// }
// myname()
// function add(){
//     let num1=Number(prompt("Enter num1"));
//     let num2=Number(prompt("Enter num2"));
//     let sum=num1+num2;
//     console.log(`${num1} +${num2}= ${sum}`);
// }
// add();
// function add(n1,n2){
//     let sum=n1+n2;
//     console.log(`${n1} +${n2}= ${sum}`);
// }
// let num1=Number(prompt("Enter num1"));
// let num2=Number(prompt("Enter num2"));

// add(num1,num2)

// function foo(){
//     return 'Hello'
// }
// console.log(foo())

// ! AnonymousFunction
// let fun=function(){
//     console.log("Hello")
// }
// fun();
// let fun=function(fum){
//     console.log("Hello "+ fum)
// }
// fun("Dinga");

// let fun=function(){
//      return "Hello";
// }
// console.log(fun());

// let fun=function(fum){
//     return fum;
// }
// console.log(fun("Hello"));


// ! Arrow funcction
// todo: WAP to print even number from 20-30 by using arrow function with parameter without return value
//? function without parameter without return
// let even=()=>{
//     let a=20
//     let b=30
//     for( a ;a<=b;a++){
//         if(a%2==0)
//         console.log(a)
//     }
// }
// even()

// ?function with parameter without return
// let even=(a,b)=>{
//     for( a ;a<=b;a++){
//         if(a%2==0)
//         console.log(a)
//     }
// }
// console.log(typeof even)
// even(20,30)

//? function without parameter with return
// let even=()=>{
//     let a=20
//     return a%2==0?"Even":"Odd";
// }
// console.log(even())
//? function with parameter without return
// let even=(a)=>{
//   return  a%2==0?"Even":"Odd"
//     }

// console.log(even(20)) 

//* spacial behabear of arrow function
// let fun =a=>{
//     console.log(a)
// }
// fun("Dinga")

// let foo=_=>{
//     console.log("Hi i am in Arrow Function"+_)
// }
// foo ("Dingi")

// todo:Addintion
// let add=(a,b)=>{
//     return `${a}+${b}=${a+b}`
// }
// console.log(add(10,20))

// let add=(a,b)=>`${a}+${b}=${a+b}`
// console.log(add(100,200))

// let fun =(myname)=>{
//     return `My Name is ${myname}`
// }
// let x=fun("Dinga")
// console.log(x)

// let fun1=myname=>'My name is ${myname}'
// console.log(fun("Dinga"))


// ! Self Invoking Function
// ? Genral Annonmus function  : we can call the function inside or outside of sif body
// (
//     function(){
//         console.log("Hello");
//     }()
// );
// *sif
// (
//     function(){
//         console.log("Hello");
//     }
// )();
// * we can call outside the body
// (
//     function(){
//         console.log("Hello");
//     }
// )();
// * arrow function we call only outside using ()
// (
//     ()=>{
//         console.log("Hello Arrow");
//     }
// )();
// ? with parameter
// (
//     (a,b)=>{
//         console.log(a+b)
//     }
// )(100,200);

// ? with parameter with return
// let x=(
//     (a,b)=>{
//         return (a+b);
//     }
// )
// (100,400)
// console.log(x)

// ? with parameter and return value
// let x=(
//    (msz)=>{
//         return (msz);
//     }
// )
// ("Welcome")
// console.log(x)
// // or
// console.log((msz =>msz)("Welcome"));


// ! Callback Function
// function num(){
//     return 100;
// }

// function sum(a,b){
//     let res=a+b;
//     console.log(res)
// }
// sum( num(),200)

// // callback function
// let surname = function(){
//     return "Kumar"
// }
// let fullName=function(fnm,lnm){
//     let res=`My Name is ${fnm} ${lnm}`
//     console.log(res);
// }
// fullName("Abhinav" , surname())

// todo Example
// * b()- is callback function and sum which is accepting is called Higher order function
// let sum=function(a,b){
//     let res=a+b()
//     console.log(res)
// }
// sum(200,function(){
//     return 100
// })
!function () {
    console.log("Code runs!");
  }();


