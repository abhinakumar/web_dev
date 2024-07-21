let onOff=()=>{
    let btn=document.getElementsByTagName('button')
    btn[0].classList.add('green')
}
let container=document.getElementsByTagName('div')
let applyRedColor=()=>{
   
    container[0].classList.add('red')
    container[0].classList.remove('yellow')
}
let applyYellowColor=()=>{
    container[0].classList.add('yellow')
    container[0].classList.remove('red')
}