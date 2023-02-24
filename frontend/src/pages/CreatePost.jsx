import React, { useState } from 'react'
import { useDataContext, useModifierContext } from '../config/store';
import { useNavigate } from 'react-router-dom';
import { PostAPIService } from '../services/PostsApiService';
import { PostValidator } from '../utils/validators';
import ErrorMessage from '../components/ErrorMessage';

const CreatePost = () => {

	const { postChanges, editingPost } = useDataContext();
	const dataModifier = useModifierContext();
	const apiProvider = new PostAPIService();
	const navigate = useNavigate();
	const [error, setError] = useState(null);

	const handleEditionData = (e, field) => {
		const value = e.target.value;
		dataModifier({postChanges: {...postChanges, [field]: value}})
	}

	const handleSave = async (e) => {
		e.preventDefault();
		try {
			PostValidator(postChanges);
			let data = editingPost ?
			await apiProvider.updatePost(postChanges)
			:
			await apiProvider.createPost(postChanges);
			if(data){
				dataModifier({postChanges: null, editingPost: false})
				navigate("/")
				return
			}
			throw new Error("Something was wrong, please try again"); 
		} catch (error) {
			setError(error.message)
		}
	}
	
	return (
		<form className='container' onSubmit={(e) => handleSave(e)}>
			<div className="mb-3">
				<label htmlFor="user" className="form-label">Username</label>
				<input value={postChanges?.username || ""} onChange={(e) => handleEditionData(e, "username")} type="text" className="form-control" id="user" aria-describedby="emailHelp" />
			</div>
			<div className="mb-3">
				<label htmlFor="post" className="form-label">ImageUrl</label>
				<input value={postChanges?.post || ""} onChange={(e) => handleEditionData(e, "post")} type="text" className="form-control" id="post" />
			</div>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">Description</label>
				<textarea value={postChanges?.description || ""} onChange={(e) => handleEditionData(e, "description")} type="text" className="form-control" id="description" />
			</div>
			<ErrorMessage error={error} />
			<div className='d-flex justify-content-end'>
				<button type="submit" className="btn btn-primary px-4">Save</button>
			</div>
		</form>
	)
}

export default CreatePost;