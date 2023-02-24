import React from 'react'
import "./Post.css"

const Post = (props) => {

	const {username, post, description, detailed, handleEditPost, handleDeletePost} = props;

	return (
		<div className='container-fluid border border-primary mt-2'>
			<div className='row py-2 justify-content-between'>
				<div className='col-auto d-flex align-items-center'>
					<div className='profile'>
						<span className='fw-bold fs-2'>U</span>
					</div>
					<div className='px-2'>
						<span className='h4'>{username}</span>
					</div>
				</div>
				{
					detailed && (
						<div className='col-auto d-flex align-items-center'>
							<button onClick={() => handleEditPost()} className='btn btn-primary mx-1'>Edit</button>
							<button onClick={() => handleDeletePost()} className='btn btn-danger mx-1'>Delete</button>
						</div>
					)
				}
			</div>
			<div className='row py-1'>
				<img className='img-fluid' src={post} onError={
					({currentTarget}) => currentTarget.src = "https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg"
				} />
			</div>
			{
				description && (
					<div className='row p-2'>
						<span>{description}</span>
					</div>
				)
			}
		</div>
	)
}

export default Post