import React from 'react';
import i4 from './images/Query4Graph.png'
class query4 extends React.Component {
render(){
	return (
	<div>
	<h1>Query 4: the trend of how BMI affects different sports of athletes in summer and winter Olympics.</h1>
	

	This graph shows how BMI directly affects the number of medals won by an athlete. This trend calculates the average amount of medals won per BMI. 
	<br />As seen in the graph, there is a direct correlation between the number of medals won and the BMI. 
	<br />As the BMI increases the number of medals won also increases at a steady pace. However, once a BMI of 30.9 is reached there is a sudden peak that almost hits the 60-medal count. 
	<br />The average BMI in the world is 18.0 to 25.0  and in this graph, it shows that within this BMI range the range of medal count is between 20 and 35. 
	<br />So, this graph is useful for teams to see that keeping their athletes healthy and at a normal BMI can be useful in the long run when it comes to winning.


 <img src={i4} alt="Excel trend for query 4." width="1060" height="500"/>
	</div>
	
)
}
}

export default query4;
