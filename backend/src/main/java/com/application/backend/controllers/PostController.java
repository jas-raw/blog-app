package com.application.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.backend.models.PostModel;
import com.application.backend.services.PostService;

@RestController
@RequestMapping("api/v0/post")
@CrossOrigin(origins = "*")
public class PostController {
	
	@Autowired
	PostService service;

	@GetMapping("/all")
	public List<PostModel> getAll(){
		return service.getPosts();
	}

	@GetMapping("/{id}")
	public Optional<PostModel> getById(@PathVariable("id") long id){
		return service.getPostDetails(id);
	}

	@PostMapping("/new")
	public PostModel create(@RequestBody PostModel post){
		return service.savePost(post);
	}

	@PutMapping("/update")
	public PostModel update(@RequestBody PostModel post){
		return service.savePost(post);
	}

	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable("id") long id){
		return service.deletePost(id);
	}
}
