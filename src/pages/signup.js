import React from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
return (
	<div>
	<h1>Welcome to queries!</h1>
    <p>Click the link to go to query pages:</p>
      <Link to="/query1">Go to Query 1</Link>
	  <div></div>
	  <Link to="/query2">Go to Query 2</Link> 
	</div>
);
};

export default SignUp;
