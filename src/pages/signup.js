import React from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
return (
	<div>
	<h1>Welcome to queries!</h1>
    <p>Click the link to go to query pages:</p><div>
    
	  

	  </div>  
	  <Link to="/query1">Go to Query 1</Link>
	  <br /><br /> 
	  <Link to="/query2">Go to Query 2</Link> 
	  <br /><br /> 
	  <Link to="/query3">Go to Query 3</Link> 
	  <br /><br />  
	  <Link to="/query4">Go to Query 4</Link> 
	  <br /><br />  
	  <Link to="/query5">Go to Query 5</Link> 
	  <br /><br />  
	  <Link to="/query6">Go to Query 6</Link> 
	</div>

	
);
};

export default SignUp;
