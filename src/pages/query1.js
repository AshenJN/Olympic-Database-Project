import React from 'react';
import sample1 from './images/samplePic1.png'
import excel from './images/query1-1.png'
class query1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Query1</h1>
        <p style={{ fontSize: "14px" }}>
          Query 1 shows the trend of the amount of medals that each team has won at each game compared to the other teams.  <br />
         Note: Given the huge data set we have colleted, there is no way to show the graph for each country for this query, thus I decided to pick countries with the most olympic medals in the world as representatives.
         <br />
         These countries include: United States, Soviet Union (and Russia), United Kingdom, Germany, France, Italy, China, Sweden, Australia, and Japan.
          <br />
          This query compares the number of medals each team has won depending on the game. Primarily this is to see how different teams excel at different sports, and potential regional impact.

        </p>
        Excel screenshot with over 3000 results: <br />
        <img src={excel} alt="Excel screenshot with over 3000 results." />
     
		
      </div>
    );
  }
}

export default query1;
