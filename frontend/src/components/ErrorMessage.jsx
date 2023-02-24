import React from 'react'

const ErrorMessage = ({error}) => {
	return (
		<div className='text-center py-2'>
			{error && <span className='text-danger'>{error}</span>}
		</div>
	)
}

export default ErrorMessage