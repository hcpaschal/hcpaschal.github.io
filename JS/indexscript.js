function getDate(){
	
	const dateContainer = document.querySelector('#date');
	const currentDate = new Date();
	dateContainer.innerHTML = "Today is: " + currentDate.toLocaleDateString("en-US");
}

getDate();

function getTime(){

	const timeContainer = document.querySelector('#time');
	const currentTime = new Date();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();

	const timeString = "Time: " + hours + ":" + minutes + ":" + seconds;
	timeContainer.innerHTML = timeString;
}

getTime();
setInterval(getTime, 1000)

