import React from 'react';
import sample1 from './images/samplePic1.png'
class query1 extends React.Component {
  render() {
    return (
      <div>
        <h1>query1</h1>
        <p style={{ fontSize: "14px" }}>
          Query 1 shows the trend between the age of each
          participant and how many medals they won was based on each individual event and whether they were male or female.
          <br />
          This query compares the number of medals each team has won depending on the game. Primarily this is to see how different teams excel at different sports, and potential regional impact.

        </p>
        <img src={sample1} alt="Sample Picture 1"width="300" height="200" />
		
      </div>
    );
  }
}

export default query1;
