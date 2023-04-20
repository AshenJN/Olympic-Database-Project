import React from 'react';
import sample1 from './images/samplePic1.png'
import excel from './images/query1-1.png'

import i1 from './images/q1.png'
import i12 from './images/q12.png'
import i13 from './images/q13.png'
import i14 from './images/q14.png'
import i15 from './images/q15.png'
import i16 from './images/q16.png'
import i17 from './images/q17.png'
import i18 from './images/q18.png'
import i19 from './images/q19.png'
import i110 from './images/q110.png'
class query1 extends React.Component {
  render() {
    return (
      <div>
      <h1>Query 1: The trend of the number of medals won by the top 10 performing teams, separated by  the type of medal, each year</h1>
        <p>

      The following ten graphs show how many medals each team has won each year, separated by the medal type,  
       <br />for the following teams: United States, Soviet Union (and Russia), United Kingdom, Germany, France, Italy, China, Sweden, Australia, and Japan.
       <br />  These graphs clearly depict how the country's economy at the time impacted how many medals they won and how the number has fluctuated over time.
       <br /> Although these are the top 10 in the year 2016, it is clear to see that this was not always the case.<br />
        
        </p>
        <br />
        <p></p>
        <img src={i1} alt="America" width="800" height="400"/>
        <br />
        <p></p>
        <img src={i12} alt="America"/>
        <br />
        <p></p>
        <img src={i13} alt="America"/>
        <br />
        <p></p>
        <img src={i14} alt="America"/>
        <br />
        <p></p>
        <img src={i15} alt="America"/>
        <br />
        <p></p>
        <img src={i16} alt="America"/>
        <p></p>
        <br /> <img src={i17} alt="America"/>
        <p></p>
        <br /> <img src={i18} alt="America"/>
        <p></p>
        <br /> <img src={i19} alt="America"/>
        <p></p>
        <br /> <img src={i110} alt="America"/>




        <br />
        Excel screenshot with over 3000 results: <br />
        <img src={excel} alt="Excel screenshot with over 3000 results." />
     
		
      </div>
    );
  }
}

export default query1;
