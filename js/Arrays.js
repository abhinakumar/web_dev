// let arr=[10,'hai',true,undefined,null,()=>{},{},[]]
// console.log(typeof arr)
// console.log(arr)
// console.log("array length= "+ arr.length)

// ! Modification
// let arr=[10,20,30,40,50]
// console.log(arr)

// todo: Updating

// console.log(arr[1]);
// arr[1]='hai'
// console.log(arr);

// todo: Adding array element
// arr[6]=60
// console.log(arr);
// console.log(5)

// todo: deleteing array element
// let dlt=delete arr[3]
// console.log(arr)
// console.log(dlt);//true

// ? Example Prograam
//  let arr=[10,'Hai',true,100,false,'Bye']
// todo: wap to display all array element & index position from the array list 

// for(let i=0;i<arr.length;i++){
//     console.log(`arr[${i}] = ${arr[i]}`)
// }
// let arr=[10,'Hai',true,100,false,'Bye']
// todo: wap to display numbers array  list
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===Number(arr[i]))
//     console.log(arr[i])
// } 

// let arr=[10,'Hai',true,100,false,'Bye']
// todo: wap to display numbers array  list
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===String(arr[i]))
//     console.log(arr[i])
// } 

// todo: wap to print only Even number from the array list
// let arr=[10,15,20,25,30,40,45,50]
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==0)
//     console.log(arr[i])
// }

//! Method
// let arr=[10,20,30,40,50]
// console.log(arr)
// todo : Adding the array element 
// ? push : adding array elements at the last ,&it is effecting to array length
// arr.push("Hai",true)
// console.log(arr)

// ? unshift : adding array element at the first & it is effecting to array length
// arr.unshift(false,'bye')
// console.log(arr)
//  todo: deleting the array element from the array list
// ? pop: it is used to delete the array element from last in array list
/*let x=arr.pop()
let y=arr.pop()
console.log(arr)
console.log(x,y)

let x1=arr.shift()
let x2=arr.shift()
console.log(arr)
console.log(x1, x2)*/

// ! --------------------------------------------
// ? splice
// let arr=[10,20,30,40,50]
// console.log(arr)
// todo : Deleting arrays element from the arrays list
// let deletedElem=arr.splice(2,2)
// console.log(arr) 
// console.log("Deleting Element = " + deletedElem);

// todo: adding array elements
// arr.splice(1,0,'newElements1','newElements2')
// console.log(arr)

// todo: both operation (adding & deleting)

// let x= arr.splice(2,1,true,false)
// console.log(arr)
// console.log(x);

// ! Map
// let arr=[10,20,30,40,50]
// console.log(arr)
// for(let i=0;i<arr.length;i++)
// console.log(i)
// console.warn(`-------------map method--------------------`);
// * in map function first argument is for arr element and second for index
// arr.map((elem,index)=>{
//     // console.log(elem)
//     console.log(index)
// })

// todo: Example
// let arr=[10,20,30,40,50]
// console.log(arr);
// console.warn('------------for loop--------------')
// let temp=[]
// for(let i=0;i<arr.length;i++)

// temp.push(arr[i]+5)

// console.log(temp);

// console.warn('---------map method-----------')
// let res=arr.map((elem)=>{
//     return elem+5
// })
// console.log(res)

// todo: Multiplication table
// let num=5
// let arr=[1,2,3,4,5,6,7,8,9,10]
// arr.map((elem)=>{
//     let res=elem*num
//     console.log(`${num} *${elem} =${res}`)
// })
// let num=5
// arr=[1,2,3,4,5,6,7,8,9,1]
// arr.map((elem,i)=>{
//     let res=(i+1)*num
//     console.log(`${num} *${i+1} =${res}`)
// })
//let arr=[1,2,3,4,5,6,7,8,9,10]
// let res=arr.map((arg)=>{
//     return arg*arg
// })
// console.log(res)
// console.log(arr.map(elem=>elem*elem ));
// ! filter method
// todo: exmple : print even number from this array list
//  let arr=[10,15,20,25,30,35,40,45,50]
//  let temp=arr.filter((arg)=>{
   
//    return  arg%2==0;
// })

// console.log(temp)

// todo : print only number from the array
let arr=[10,'hi',true,false,250,{},undefined,null,100]
let res=arr.filter((arg)=>{
return typeof(arg)==='number'
})
console.log(res)
