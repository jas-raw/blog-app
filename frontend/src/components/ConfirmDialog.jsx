import React from 'react'
import "./ConfirmDialog.css"

const ConfirmDialog = ({onCancel, onConfirm, isOpen}) => {
	return (
		<div>
			{
				isOpen && (
					<div className='center-screen'>
						<div className='bg-confirm p-2'>
							<div className="row d-block py-4">
								<span className="h4">Are you sure?</span>
							</div>
							<div className='row justify-content-around'>
								<div className='col-auto'>
									<button onClick={onCancel} className='btn btn-danger'>No</button>
								</div>
								<div className='col-auto'>
									<button onClick={onConfirm} className='btn btn-success'>Yes</button>
								</div>
							</div>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default ConfirmDialog