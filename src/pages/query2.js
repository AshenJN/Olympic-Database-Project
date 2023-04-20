import React from 'react';
import i2 from './images/q2.png'
class query2 extends React.Component {
render(){
	return (
	<div>
	<h1>Query2</h1>

	<p style={{fontSize: "14px"}}>
	Query 2 will show the trend between the age of each participant and how many medals they won was based 
	on each individual event and whether they were male or female. </p>
	<br />
	This trend analyzes the number of medals earned by different countries and regions split by gender.<br />
	The number of medals can be treated as an indication of a country's investments in its athletes and subsequently the 
	 general status of a country.<br /> With a growing economy, a country can invest more in such events and use the scores of its 
	 athletes to peacefully show its existence in the world, and vice versa. <br />
	 Steadily growing scores of medals over a certain time period usually reflect steady development of the country within this time.
	 <br /><img src={i2} alt="Excel trend for query 2." width="700" height="450"/>
	</div>
	
)
}
}

export default query2;
