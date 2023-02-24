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

	const loadPosts = async () => {
		stateModifier({loading: true});
		const data = await apiProvider.getAllPosts()
		stateModifier({loading: false, posts: data});
	}

	useEffect(() => {
		loadPosts();
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
			{
				posts.length === 0 && (
					<div className='text-center center-grid'>
						<div className='row'>
							<div className='row'>
								<span className='h2'>No posts to show</span>
							</div>
							<div className='row'>
								<a className='navbar-brand' onClick={loadPosts}>Reload</a>
							</div>
						</div>
					</div>
				)
			}
		</main>
	)
}

export default HomePosts