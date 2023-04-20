import React from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
return (
	<div>
	<h1>Queries</h1>
    <p>Click any of the following links to see the different queries available:</p><div>
    
	  

	  </div>  
	  <Link to="/query1">Query 1</Link>
	  <br /><br /> 
	  <Link to="/query2">Query 2</Link> 
	  <br /><br /> 
	  <Link to="/query3">Query 3</Link> 
	  <br /><br />  
	  <Link to="/query4">Query 4</Link> 
	  <br /><br />  
	  <Link to="/query5">Query 5</Link> 
	  <br /><br />  
	  <Link to="/query6">Query 6</Link> 
	  
	</div>

	
);
};

export default SignUp;
