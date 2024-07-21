//---------- reduce method ---------------

// let arr=[1,2,3,4,5]
// console.log(arr);

// let add=arr.reduce((preVal,curVal)=>{
//     console.log(`preVal= ${preVal}, curVal ${curVal}`);
//     return preVal + curVal;
// })

// console.log(add);

//##################################################

// let arr=[1,2,3,4,5]
// console.log(arr);
// //console.log(arr.reduce((x,y)=>x*y)); (shortform question)

// let multiple=arr.reduce((x,y)=>{
//     console.log(`preVal=${x},curVal-${y}`);
//     return x*y
// })
// console.log(multiple);

//################################################

// let arr=[8,3,0,9,4,6,2,1,7]
// console.log(arr);

// let res =arr.sort()
// console.log(res);

//################################################

// let arr=[88,25,3,6,454,8,22,255,,99,5,35,,9]
// console.log(arr.sort()); // sort method only sorts first character

// let res1 = arr.sort((a,b)=>{
//     return a-b //ascending-- (b-a) for descending 
    
// })
// console.log(res1)

//################################################

// let arr=[8,3,0,9,4,6,2,1,5,7]
// console.log(arr);
// console.log(arr.reverse()); // reverses the array
// console.log(arr.sort()); // sorts the array in ascending
// console.log(arr.sort().reverse()); //sorts array in descending (reverse of ascending)

//################################################

// let arr=['red','blue','yellow','black','white','violet','blue','green','grey']
// let res1 = arr.includes('yellow')
// console.log(res1); //true
// console.log(arr.includes('maroon')); //false

// console.log(arr.indexOf('yellow')); // 2
// console.log(arr.indexOf('blue')); // 1
// console.log(arr.lastIndexOf('blue')); // 6
// console.log(arr.indexOf('maroon'));// -1

// console.log(arr.lastIndexOf('maroon')); // -1

//################################################

// let arr=['My','name','is','Karthik']
// console.log(arr);
// console.log(arr.join());
// console.log(arr.join(' '));

//################################################

// let str='Welcome to web class'
// console.log(str);
// console.log(str.split());
// console.log(str.split(' '));
// console.log(str.split(''));

// let para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta accusamus tempore quibusdam quos distinctio id nisi possimus at optio quas, tempora aperiam libero voluptatem fuga ut, nesciunt, dolor numquam porro. At illum maiores, in soluta porro ullam, repellat id ducimus ratione excepturi, nesciunt animi! Vero iure culpa expedita officia molestiae."
// console.log(para);
// console.log(para.split(' '));
// console.log(para.split(' ').length);

//################################################

// let x=[10,20,30]
// let y=[25,50,75]

// let arr=[10,15,20,x,50,40,y]
// console.log(arr)
// console.log(arr.flat())

//################################################

// let x=[1,2,3,4,5]
// let y=[6,7,8,9,10]
// let arr1=[10,20,30,40,x,50,60,y,70,80,90]
// console.log(arr1);
// let arr2=[10,20,30,40,...x,50,60,y,70,80,90]
// console.log(arr2);
// let arr3=[10,20,30,40,...x,50,60,...y,70,80,90]
// console.log(arr3);
// console.log(...arr1);
// console.log(...x)

//######0##########################################

// function num(...a){ //rest
//     console.log(a);
//     console.log(...a); //spread
// }
// num(10,20,30,40,50)

// document.writeln()

//################################################

// let num=(...arr) => {
//     console.log(arr);

//     let sqrt=arr.map((elem)=>{
//         return (elem*elem);
//     })
//     console.log(sqrt)

//     let num=sqrt.sort((a,b)=>a-b)(
//         console.log(num)
//     )
//     console.log(num)

//     }

       
    

    
    



// num=(5,4,3,6,2,1,9,7,8,100)


//################################################

// WAP to give largest number from this array
// let arr=[25,30,50,2,1,0,100,64,20,21]

// console.log(arr.sort((a,b)=>b-a)[0]);

//################################################

// let large=Math.max(10,20,5,23,41,50,55,23,52,11,110)
// console.log(large)

// let small=Math.min(10,20,5,23,41,50,55,23,52,11,110)
// console.log(small)

//################################################

// function num(...arr){
//     console.log(arr);

//     let large =Math.max(...arr)
//     console.log(large);

//     console.log(Math.min(...arr));
// }
// num(12,5,33,215,454,88,566,2125,12)

//################################################

// console.log(Math.PI);
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,3));
// document.writeln("2<sup>3</sup> = " + Math.pow(2,3))

//################################################

// console.log(Math.floor(255.36));
// console.log(Math.floor(420.95));

// console.log(Math.ceil(250.36));
// console.log(Math.ceil(300.001));

// console.log(Math.round(250.40));
// console.log(Math.round(250.49));
// console.log(Math.round(250.50));

//################################################

// let otp=Math.random()*10000
// console.log(Math.floor(otp))

//################################################

function generateotp(){
    // let randomnum=Math.random()*10000
    // let otp=Math.floor(randomnum)

    // if (otp>1000 && otp<10000){
    //     console.log(otp);
    // }
    // else{
    //     generateotp() // because sometimes it gives 3 digits (so to avoid, generate again)
    // }

    let otp=Math.floor(Math.random()*10000);
    (otp>1000 && otp<10000) ? console.log(otp):generateotp;
}
generateotp()


