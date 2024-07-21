 let btn=login=(e)=>{
 e.preventDefault();
let userName=e.target[0]
let password=e.target[1]
let err=`solid 2px red`;
    if(userName.value===`Abhinav`&& password.value===`123456`)
    window.location='../../realme/index.html';
    else{
       let text= document.getElementById('#error').innerText
       
    }
    if(userName.value===""||userName.value===null) 
        userName.style.border=err;
    else
        userName.style.border=`none`;

    if(password.value===""||password.value===null)
        password.style.border=err;
    else
        password.style.border=`none`;

}