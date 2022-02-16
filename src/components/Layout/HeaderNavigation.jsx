import React, { useContext } from 'react'
import classes from './HeaderNavigation.module.css'
import InputCtx from '../../store/inputCtx'
import { Link } from 'react-router-dom'

const HeaderNavigation = () => {
	const { dispatch } = useContext(InputCtx)
	const clear = () => {
		dispatch({ type: 'CLEAR_DATA' })
	}
	return (
		<>
			<ul className={classes.navigation}>
				<li>home</li>
				<li>settings</li>
				<li>profile</li>
				<button onClick={clear}>
					<Link to={'/loginPage'}>log out</Link>
				</button>
			</ul>
		</>
	)
}

export default HeaderNavigation
