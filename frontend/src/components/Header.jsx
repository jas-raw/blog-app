import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import { useModifierContext } from '../config/store';

const Header = () => {

	const navigate = useNavigate();
	const dataModifier = useModifierContext();

	const handleNav = (route) => {
		dataModifier({detailPost: null, postChanges: null});
		navigate(route);
	}

	return (
		<nav className="navbar nav">
			<div>
				<a onClick={() => handleNav("/")} className="navbar-brand">Posts</a>
			</div>
			<div>
				<a onClick={() => handleNav("create-update")} className="navbar-brand">Create</a>
			</div>
		</nav>
	)
}

export default Header