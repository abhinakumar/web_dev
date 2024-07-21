function changeBackgroundColor() {
    let x = prompt("Enter color");
    // document.body.style.backgroundColor = x;
    document.getElementsByTagName('body')[0].style.cssText.BackgroundColor=x;
   
}
