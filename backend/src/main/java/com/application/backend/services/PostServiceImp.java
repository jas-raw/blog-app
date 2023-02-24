package com.application.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.backend.models.PostModel;
import com.application.backend.repositories.PostRepository;

@Service
public class PostServiceImp implements PostService {

	@Autowired
	PostRepository postRepo;

	@Override
	public Optional<PostModel> getPostDetails(long id) {
		return postRepo.findById(null);
	}

	@Override
	public PostModel savePost(PostModel user) {
		return postRepo.save(user);
	}

	@Override
	public List<PostModel> getPosts() {
		return (List<PostModel>) postRepo.findAll();
	}

	@Override
	public boolean deletePost(long id) {
		try {
			postRepo.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
}
