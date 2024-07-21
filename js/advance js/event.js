// function fun(){
//     console.log("Welcome")
//     console.log("to js")
// }
// function printName(){
//    let name= prompt("Enter name");
//    let dob=prompt("Enter DAte of Birth (YYYY)")
//    let dateObj=new Date();
//    let age=dateObj.getFullYear()-dob
//    alert(`My Name is ${name} & my age is ${age}`)
// }

// let singleClick=()=>{
//     console.log("I m Single")
// }
// let doubleClick=()=>{
//     console.log("I m Mingle");
// }
function fun(){
    console.log("Welcome");
    console.log("to js");
}

function printName(){
   let name = prompt("Enter name");
   let dob = prompt("Enter Date of Birth (YYYY)");
   let dateObj = new Date();
   let age = dateObj.getFullYear() - dob;
   alert(`My Name is ${name} & my age is ${age}`);
}

let singleClick = () => {
    console.log("I am Single");
}

let doubleClick = () => {
    console.log("I am Mingle");
}

// ! Keybord Event
function key1(){
    console.log("Hello")
}
function key2(){
    console.log("Bye")
}
function key3(){
    console.log("Welcome")
}

// ! Mouse Event
function mouse1(){
    console.log("Smile please")
    console.log("😄")
}

function printName(e){
    e.preventDefault()
    let fnm=e.target[0].value
    let lnm=e.target[1].value
    let dob=e.target[2].value
    let dateObj=new Date();
    let age= dateObj.getFullYear() - dob.slice(0,4)
    console.log(`My name is ${fnm} ${lnm} age is ${age}`)
}