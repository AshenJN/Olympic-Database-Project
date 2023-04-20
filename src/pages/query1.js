import React from 'react';
import sample1 from './images/samplePic1.png'
class query1 extends React.Component {
  render() {
    return (
      <div>
        <h1>query1</h1>
        <p style={{ fontSize: "14px" }}>
          Query 1 shows the trend of the amount of medals that each team has won at each game compared to the other teams. 

          <br />
          This query compares the number of medals each team has won depending on the game. Primarily this is to see how different teams excel at different sports, and potential regional impact.

        </p>
        <img src={sample1} alt="Sample Picture 1"width="300" height="200" />
		
      </div>
    );
  }
}

export default query1;
