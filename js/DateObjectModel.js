// let dateObj=new Date()
// console.log(dateObj);
// console.log(typeof dateObj);
// let curSec=dateObj.getSeconds()
// console.log('Seconds = '+curSec);
// let curMin=dateObj.getMinutes()
// console.log('Minutes = '+curMin);
// let curHour=dateObj.getHours()
// console.log('Hours = '+curHour);
// console.log(`Time = ${curHour}:${curMin}:${curSec}`);

// let curDD=dateObj.getDate()
// console.log('Date = '+curDD);
// let curMM=dateObj.getMonth()
// console.log('Month = '+curMM);
// let curYYYY=dateObj.getFullYear()
// console.log('Year = '+curYYYY);
// console.log(`Date = ${curDD}:${curMM}:${curYYYY}`)


// todo: Example

let person={
    calculateAge : function (fum=String(),dob=Number()){
        let dateObj=new Date()
        let age=dateObj.getFullYear()-dob
        console.log(`${fum} age is ${age}`);
    }
}
person.calculateAge("dinga", 1990)
person.calculateAge("Manga",1980)