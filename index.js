
let hrhand=document.querySelector('.hrhand')
let minhand=document.querySelector('.minhand')
let sechand=document.querySelector('.sechand')
setInterval(() => {
let time= new Date();
let hour=time.getHours();
let minute=time.getMinutes();
let second=time.getSeconds();


let hrrotation= (hour*30 + minute/2);
let minrotation=(minute*6);
let secrotation=(second*6);


    hrhand.style.transform=`rotate(${hrrotation}deg)`
    minhand.style.transform=`rotate(${minrotation}deg)`
    sechand.style.transform=`rotate(${secrotation}deg)`
}, 1000)

//here we need to write the time let time= new Date();
// let hour=time.getHours();
// let minute=time.getMinutes();
// let second=time.getSeconds();
// let hrrotation= (hour*30 + minute/2);
// let minrotation=(minute*6);
// let secrotation=(second*6);
// because these things need to get update by each second. If the variables get  hour, minute, second time updated by each second then the roration of each hand will be updated by each second
//the time interval that we set in milliseconds can be less than 1000 milliseconds and greater than 1 millisecond ;then we will get general time , if we set time larger than 1000milliseconds then time will updated after that that given time but the time of the clock will be general time;
//example we set time 2000 milliseconds then the rotation of the second hand will be updated per 2 sec but the calcultion of rotation per second remains same , here the second hand rotates 12 degree in every 2 second ,on the otherhand when time was set 1000 the rotation of the second hand will be updated per 1sec but the calcultion of rotation per second remains same , here the second hand rotates 6 degree in every 1 second
//For example if we set time 1500 milliseconds, for 1st 1500 milliseconds the second hand will rotate 6 degree and time in second is 1sec but the next time rotation will be updated in 1500+1500=3000milliseconds so time in seconds=3sec, and time change in second after 1st update = 2seconds so now second hand will rotate 12degree and thus time interval greater than 1000 will change the rotation's uniformness after some interval of time. 
// hence we set any time we will get the generaal true time but the rotation update of hands will be changed accordingly