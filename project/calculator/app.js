let input=document.querySelector('input')
let getValue=(e)=>{
    let btnVal=e.target.innerText
    input.value+=btnVal
}
let result=()=>{
    input.value=eval(input.value)
}
let empty=()=>{
    input.value=""
}