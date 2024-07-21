let onOff=(e)=>{
    e.defaultPrevented;
    let btn=document.getElementsByTagName('button')
    // console.log(btn[0])
   btn[0].classList.toggle('red')
  let y= btn[0].innerText
if(y==='ON')
document.getElementsByTagName('button')[0].innerText='OFF'
else
document.getElementsByTagName('button')[0].innerText='ON'

    btn[0].classList.toggle('green')
   

}
// ! how too add something from js to page
// {let newTag=document.createElement('h1')
// newTag.innerHTML='welcome';
// let r=document.body.appendChild(newTag)
// r='hi'
// }

let insertData=(e)=>{
    e.preventDefault()
    let tagname=e.target[0].value
    let data=e.target[1].value

    let newTag=document.createElement(tagname);
    newTag.innerText=data
    document.body.appendChild(newTag)
}