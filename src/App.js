import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Main from './pages/index';
import Q1 from './pages/query1';
import Q2 from './pages/query2';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />  {/*    //vscode seems to be marking this as an error, but it can be ran  */}
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} />
    <Route path='/index' Component={<Main/>} />
    <Route path='/query1' element={<Q1 />} />
    <Route path='/query2' element={<Q2 />} />
	</Routes>
	</Router>

);
}

export default App;
