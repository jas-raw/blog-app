import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { useDataContext, useModifierContext } from '../config/store';
import { useNavigate } from 'react-router-dom';
import { PostAPIService } from '../services/PostsApiService';
import ErrorMessage from '../components/ErrorMessage';
import ConfirmDialog from '../components/ConfirmDialog';

const DetailPost = () => {

	const { detailPost } = useDataContext();
	const dataModifier = useModifierContext();
	const navigate = useNavigate();
	const apiProvider = new PostAPIService();
	const [deleteAlert, setDeleteAlert] = useState(false);
	const [error, setError] = useState(null);

	const handleEditPost = () => {
		dataModifier({postChanges: detailPost, editingPost: true});
		navigate("/create-update")
	}

	const onDeletePost = async () =>{
		const result = await apiProvider.deletePost(detailPost["id"])
		handleDeleteDialogClose()
		if(result){
			dataModifier({detailPost: null});
			navigate("/")
			return
		}
		setError("Something was wrong, try again")
	}

	const handleDeletePost = () => {
		setDeleteAlert(true)
	}

	const handleDeleteDialogClose = () => {
		setDeleteAlert(false)
	}

	return (
		<div>
			{
				detailPost ? (
					<Post
						username={detailPost.username}
						post={detailPost.post}
						description={detailPost.description}
						detailed
						handleEditPost={handleEditPost}
						handleDeletePost={handleDeletePost}
					/>
				):(
					<div className='text-center center-grid'>
						<div className='row'>
							<div className='row'>
								<span className='h2'>This post is no longer available</span>
							</div>
							<div className='row'>
								<a className='navbar-brand' href='/'>Go to home</a>
							</div>
						</div>
					</div>
				)
			}
			<ErrorMessage error={error} />
			<ConfirmDialog 
				onCancel={handleDeleteDialogClose}
				onConfirm={onDeletePost}
				isOpen={deleteAlert}
			/>
		</div>
	)
}

export default DetailPost