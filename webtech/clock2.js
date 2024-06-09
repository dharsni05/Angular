let show = document.querySelector('show');
let showU  = document.querySelector('showU');


function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour >= 12) {
        if (hour > 12) 
        hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

 
    let currentTime =hour +":" +min +":" +sec +am_pm;
    setInterval(showTime,1000);
    document.getElementById("clock").innerHTML = currentTime;
	//showDate();
}

show.addEventListener('click', function() {
     
    let timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});
 
   
 
showU.addEventListener('click', function() {
    
	let timerId = setInterval(function() {
		console.log('!')}, 1000);
});
showTime();

function showUTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour <12) {
        if (hour < 12) 
        hour += 12;
        am_pm = "AM";
    } else if (hour == 12) {
        hour = 00;
        am_pm = "PM";
    }
	else{
		
		am_pm = "PM";
	}
    let currentTime =hour +":" +min +":" +sec +am_pm;
    setInterval(showUTime,1000);
    document.getElementById("clock").innerHTML = currentTime;
	   
}
showUTime();

function showDate(){
	
	let time=new Date();
	document.getElementById("clock").innerHTML = time;
}
showDate();