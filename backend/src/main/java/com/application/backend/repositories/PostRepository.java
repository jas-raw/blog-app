package com.application.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.application.backend.models.PostModel;

@Repository
public interface PostRepository extends CrudRepository<PostModel, Long> {
	
}
