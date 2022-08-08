import moment from 'moment'
import React, { useEffect, useState } from 'react'


export const TimeProgressive=({date, time})=>{
  const day = date.split('/')[0]
  const mounth = date.split('/')[1]
  const yeard = date.split('/')[2]
  const datenew = `${mounth}/${day}/${yeard}`
//   console.log(datenew);
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft( datenew, time));
	
//The useEffect is what updates the amount of time remaining. By default, React will re-invoke the effect after every render.	
useEffect(() => {
	const timer = setTimeout(() => {
		setTimeLeft(calculateTimeLeft(datenew, time));
	}, 500);
	return () => clearTimeout(timer);
});

const timerComponents = [];
const year = useState(new Date().getFullYear());

Object.keys(timeLeft).forEach((interval, index) => {
	if (!timeLeft[interval]) {
		return;
	}
	
	timerComponents.push(
	<span key={index}>
		{timeLeft[interval]} {interval}{" "}
	</span>
	);
});
	// const prueba = new Date()
//Every time the variable timeLeft is updated in the state, the useEffect fires. Every time that fires, we set a timer for 1 second (or 1,000ms), which will update the time left after that time has elapsed.
	// console.log((3%1).toFixed(2).toString().split('.')[1]);
	// console.log(timeLeft.days);
	return(
    <p className={"dateHour changeColor"}><b>Empieza: </b>{timerComponents.length? timerComponents : (<span>Time's up!</span>)}</p>
		// <div>
		// 	<h1>HacktoberFest 2021 Countdown </h1>
		// 	<h2>with React Hooks!</h2>
		// 	<div>{timerComponents.length? timerComponents : <span>Time's up!</span>}</div>
		// </div>
	);
}



const calculateTimeLeft=(date, time)=> {
	let year = new Date().getFullYear();	
	//The + before the new Date object is shorthand to tell JavaScript to cast the object as an integer, which gives you the object’s Unix timestamp represented as microseconds since the epoch.	
	const difference = +new Date(`${date} ${time}`) - +new Date();
	
	let timeLeft= {};
	
	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000*60*60*24)),
			h: Math.floor((difference / (1000*60*60)) % 24),
			m: Math.floor((difference / (1000*60)) % 60),
			s: Math.floor((difference/1000) % 60) ? Math.floor((difference/1000) % 60) : '0'
		};
	}
	
	return timeLeft;
};


