 let digitalClock = () => {
    let selectedElem = document.getElementsByTagName('span')

    let dateObj = new Date()
    // todo: Display current hours
    selectedElem[0].innerText = dateObj.getHours()

    // todo: Display current minuts
    selectedElem[1].innerText = dateObj.getMinutes()

    // todo: Display current hours
    selectedElem[2].innerText = dateObj.getSeconds()

    // ? now date 
     // todo: Display current Date
     selectedElem[3].innerText = dateObj.getDate()

     // todo: Display current Month
     selectedElem[4].innerText = dateObj.getMonth()+1
 
     // todo: Display current year
     selectedElem[5].innerText = dateObj.getFullYear()

      // todo: Display current Day
      selectedElem[6].innerText = dateObj.getDay()

// !--------------------------
 selectedElem[7].innerText=dateObj.toLocaleTimeString();
 selectedElem[8].innerText=dateObj.toLocaleDateString();

}
setInterval(digitalClock,1000)

