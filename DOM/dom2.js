let changeContent=()=>{
    let boxes=document.getElementsByClassName('box')
    boxes[0].innerText=`Welcome`;
    boxes[0].style.cssText=`font-size:25px`;

    boxes[1].style.cssText=`color:red;
                            background:yellow;`
    boxes[2].style.cssText=`border-radius:50%`

}
let changeContent1=()=>{
    let boxes=document.getElementsByClassName('box')
    boxes[0].innerText="Hello";
    boxes[0].style.cssText=`font-size:none`;

    boxes[1].style.cssText=`color:green;
                            background:pink;`
    boxes[2].style.cssText=`border-radius:10%`
}

// !-------------------
let onoff=()=>{
   let btn= document.getElementById('on-off')
   let text=btn.innerText;
   text==='ON'?btn.innerText='OFF':btn.innerText='ON';
}

let daynight=()=>{
    let btn=document.getElementById('day')
    let body=document.getElementsByTagName('body')
    let text=btn.innerText;
    if(text==='Day'){
    btn.innerText='Night'
    body[0].style.cssText=`background:black; color:white`

}
else{
    btn.innerText='Day'
    body[0].style.cssText=`background:White; color:black`
}

}

let changeImage=()=>{
    let image=document.querySelector('#image')
   let x= image.scr='../img/1.jpeg';
    console.log(image.scr)
}