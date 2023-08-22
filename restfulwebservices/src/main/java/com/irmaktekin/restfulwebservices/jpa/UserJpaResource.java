package com.irmaktekin.restfulwebservices.jpa;
/*
import com.irmaktekin.restfulwebservices.user.User;
import com.irmaktekin.restfulwebservices.user.UserDaoService;
import com.irmaktekin.restfulwebservices.user.UserNotFoundException;
import jakarta.validation.Valid;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.reactive.WebFluxLinkBuilder.methodOn;

@RestController
public class UserJpaResource {
	private UserDaoService service;
	private UserRepository userRepository;

	public UserJpaResource(UserDaoService service, UserRepository userRepository) {
		super();
		this.service = service;
		this.userRepository= userRepository;
	}



	//GET /users
	@GetMapping(path="/jpa/users")
	public List<User> retrieveAllUsers(){

		return userRepository.findAll();
	}
	
	//GET /users

		@GetMapping(path="/jpa/users/{id}")
		public EntityModel<User> retrieveUser(@PathVariable int id){
			Optional<User> user =  userRepository.findById(id);
			if(user.isEmpty() ) {
				throw new UserNotFoundException("id:"+id);
			}
			EntityModel <User> entityModel = EntityModel.of(user.get());
			WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).retrieveAllUsers());
			entityModel.add(link.withRel("all-users"));
			
			return entityModel;
		}
		
		
	//Create A User
		@PostMapping("/users")
		public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
			User savedUser= service.saveUser(user);
			URI location= ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}").buildAndExpand(savedUser.getId()).toUri(); 
			return ResponseEntity.created(location).build();
			
		}
	
	//Delete user 
		@DeleteMapping(path="/users/{id}")
		public void deleteUser(@PathVariable int id){
			 service.deleteById(id);
			
			
			
					
		}
		

}
*/