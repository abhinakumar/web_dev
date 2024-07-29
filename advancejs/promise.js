// let p= new Promise((res,rej)=>{
//     if(false)
//     res('promise is Completed')
//     else
//     rej('promise is not Completed')
// })

// p.then((data)=>{
//     console.log(data)
// })
// p.catch((err)=>{
//     console.log(err)
// })

// let p= new Promise((res,rej)=>{
//     let rcb='LOSS';
//     if(rcb==='WON'){
//         res('E sala cup namde')
//     }
//     else{
//         rej('Next sala cup namde')
//     }
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


// todo:
// let p=new Promise(()=>{}).then(()=>{}).catch(()=>{})

let fun1=()=>{
    return('Welcome')
}
let fun2=()=>{
    return new Promise((res)=>{
        setTimeout(()=>{
        res('to')
    },5000)
})
}

let fun3=()=>{
    return'Mock'
}
let res=document.getElementsByTagName('span')
let main=async()=>{
    console.log( fun1());
    console.log(await fun2());
    console.log(fun3());
    res.[0]=console.log( fun1());
}
main();