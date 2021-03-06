import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className='container_navbar'>
			<Link className='links' to='/'>
				<img
					className='styled_logo'
					src='https://i0.wp.com/www.namecheap.com/blog/wp-content/uploads/2016/11/Blog_RGB_Color_Digital_General_Logo_Large-1.jpg?quality=100'
				/>
			</Link>

			<div>
				<Link className='links' to='/'>
					Home
				</Link>
				<Link className='links' to='/wishlist'>
					Wishlist
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
