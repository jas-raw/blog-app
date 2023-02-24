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

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("api/v0/post")
@CrossOrigin(origins = "*")
@Slf4j
public class PostController {
	
	@Autowired
	PostService service;

	@GetMapping("/all")
	public List<PostModel> getAll(){
		log.info("Get all service");
		return service.getPosts();
	}

	@GetMapping("/{id}")
	public Optional<PostModel> getById(@PathVariable("id") long id){
		log.info("Get by id service");
		return service.getPostDetails(id);
	}

	@PostMapping("/new")
	public PostModel create(@RequestBody PostModel post){
		log.info("Create service");
		return service.savePost(post);
	}

	@PutMapping("/update")
	public PostModel update(@RequestBody PostModel post){
		log.info("Update service");
		return service.savePost(post);
	}

	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable("id") long id){
		log.info("Delete service");
		return service.deletePost(id);
	}
}
