root=document.getElementById('root');
let apiurl=fetch("https://api.github.com/users")

let data=apiurl.then((resp)=>{
    return(resp.json())
})

let url=data.then((arr)=>{
   arr.map((elem)=>{
    let {login,avatar_url}=elem
    console.log(`User Name: ${login} , img :${avatar_url}`);
//    root.innerText+=login
    root.innerHTML += `<div class= card> 
    <div><img src="${avatar_url}"> </div>
   <div class=tital>${login} </div>
  
  
   </div>
   `
   })
})
