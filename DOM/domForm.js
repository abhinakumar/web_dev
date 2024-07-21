let result=document.getElementsByClassName('result')
let printName=(e)=>{
    e.preventDefault()

    let fnm=document.getElementsByName('fnm')[0].value
   
    let lnm=document.getElementsByName('lnm')[0].value
    result[0].innerHTML=`My Name is ${fnm} ${lnm}`

}
let ageClaculator=(e)=>{
    e.preventDefault()

    let fnm=e.target[0].value;
    let dob=e.target[1].value;    
    let dobYear=dob.slice(0,4)
    let dateObj=new Date()
    if(dobYear<1)
    dobYear=dateObj.getFullYear();
  
    let age=dateObj.getFullYear()-dobYear
    result[1].innerText= `${fnm} age is ${age}`
}