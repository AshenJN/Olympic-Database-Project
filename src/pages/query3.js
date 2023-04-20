import React from 'react';
import i3 from './images/q3.png'
class query3 extends React.Component {
render(){
	return (
	<div>
	<h1>Query3: The rate of the total number of men compared to the total number of women that participated in the Olympics each year.</h1>

	<p style={{fontSize: "14px"}}>
	
	 </p>
	 <br />
	 This graph shows two separate trend lines, one for the number of men that have participated every year and one for the number of women that have participated every year. 
	 <br /> Within this graph, you can see a clear difference between the number of men and the number of women that have participated each year. 
	 <br />The number of men has been significantly higher almost two times the number of women every year. While the number of men has grown exponentially and has even had massive leaps in some years, 
	 <br /> the number of women has hardly moved and there has only been a growth of about 10,000 women since the very first game. 
	 <br /> When the game's first started, women and men had the smallest gap between them, but as the years have progressed the gap has gotten larger. 
	 <br /> It is also important to note that starting from the 1980's to the late 2010's there has been a jump between the number of participants. 
	 <br /> This may be caused due to the economic status of the countries at the time due to recessions in various parts of the world. 
	 <br /> Thus, countries could not afford to bring as many athletes to the Olympic games.
	 <br /><img src={i3} alt="Excel trend for query 4." />
	</div>
	
)
}
}

export default query3;
