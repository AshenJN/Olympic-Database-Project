import React from 'react';
import i5 from './images/q5.png'
class query5 extends React.Component {
render(){
	return (
	<div>
	<h1>Query 5: The trend of the greatest number of medals won by a team at the Olympics every year</h1>



	<br />This graph shows the greatest number of medals won by a team each year of the Olympics. Since the very first Olympic games, 
	<br />the team that takes home the greatest number of medals has stayed consistent with the USA brining the greatest number of medals the most times. 
	<br />In this graph, the teams do not really change with teams such as the Soviet Union, Canada, and Germany appearing multiple times. 
	<br />This graph clearly shows the amount of money each country has invested in their Olympic teams and gives a clear picture on what the world's economy looked like every year. 
	<br />In the years 1960 to 1988, the Soviet Union was taking home the greatest number of medals, which lines up with the fact that at this time they were investing their money on their athletes to prove they were the best in the world.
	<br /> However, when their country collapsed in 1991, they never won the greatest number of medals again, the USA winning the most. 
	<br /> Due to recessions in the economy, the greatest number of medals taken home fluctuates between 50 and 250 in the years 1994 to 2016.
	<br />
	<br />
	<img src={i5} alt="Excel trend for query 5." width="660" height="400"/>
	</div>
	
)
}
}

export default query5;
