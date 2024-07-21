function Genotp(){
    let rsndom= Math.random()*10000
    let otp=Math.floor(rsndom)
    console.log(otp);
    if(otp>1000&& otp<10000){
        console.log(otp)
    }
    else{
        Genotp()
    }

    // let otp= Math.floor(Math.random()*10000);
    // (otp>1000&& otp<10000)?console.log(otp):Genotp()

}
Genotp()