import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
        {/* <NavLink to="/Home" activeStyle>
			Home
            </NavLink> */}
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			 Database
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Queries
		</NavLink>
		{/* <NavLink to="/query1" activeStyle>
			Query1
	</NavLink>	 */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
