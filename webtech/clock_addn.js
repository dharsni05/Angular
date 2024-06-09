
    hour =hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 


show.addEventListener('click', function() {
     
    let timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});
 
   
 
showU.addEventListener('click', function() {
    
	let timerId = setInterval(function() {
		console.log('!')}, 1000);
});