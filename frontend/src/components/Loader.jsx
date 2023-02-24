import React from 'react'
import "./Loader.css"
import { useDataContext } from '../config/store'

const Loader = () => {
	const { loading } = useDataContext();
	return (
		<div id='loader-pop'>
			{
				loading && (
					<div className='center-screen'>
						<div className="lds-hourglass"></div>
					</div>
				)
			}
		</div>
	)
}

export default Loader