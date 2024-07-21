let loginPage=(e)=>{
   e.preventDefault()
    let userInput=e.target[0]
    let pswdInput=e.target[1]
   //  if(userInput.value==='Abhinav' && pswdInput.value==='123456'){
   //  window.location='./log_Welcome.html';}
   //  else{
   //      let err=`sold 2px red`;
   //      userInput.style.border=err
   //      pswdInput.style.border=err
   // }
   let err=`solid 2px red`;
   if(userInput.value===""||userInput.value===null)
   {
     
      userInput.style.border=err
   }
   else if(pswdInput.value===""||pswdInput.value===null)
   {
     
      pswdInput.style.border=err
   }
}