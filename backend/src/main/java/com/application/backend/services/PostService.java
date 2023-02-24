package com.application.backend.services;

import java.util.List;
import java.util.Optional;

import com.application.backend.models.PostModel;

public interface PostService {
	
	List<PostModel> getPosts();
	Optional<PostModel> getPostDetails(long id);
	PostModel savePost(PostModel user);
	boolean deletePost(long id);
}
