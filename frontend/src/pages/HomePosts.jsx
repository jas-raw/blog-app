import React, { useCallback, useEffect } from 'react'
import Post from '../components/Post'
import { useDataContext, useModifierContext } from "../config/store"
import "./HomePosts.css"
import { PostAPIService } from '../services/PostsApiService'
import { useNavigate } from 'react-router-dom'

const HomePosts = () => {

	const { posts } = useDataContext();
	const stateModifier = useModifierContext();
	const apiProvider = new PostAPIService();
	const navigate = useNavigate();

	const postClickHandler = (post) => {
		stateModifier({detailPost: post})
		navigate("details");
	}

	useEffect(() => {
		stateModifier({loading: true})
		apiProvider.getAllPosts()
		.then(data => stateModifier({loading: false, posts: data}))
	}, [])
	
	return (
		<main className='container'>
			{
				posts.map((post) => (
					<div onClick={() => postClickHandler(post)} key={post.id} className='row justify-content-center'>
						<div className='posts'>
							<Post username={post.username} post={post.post} />
						</div>
					</div>
				))
			}
		</main>
	)
}

export default HomePosts