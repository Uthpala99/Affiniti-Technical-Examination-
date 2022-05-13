package com.example.springbootbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbackend.exception.ResourceNotFoundException;
import com.example.springbootbackend.model.Person;
import com.example.springbootbackend.repository.PersonRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PersonController {
	
	@Autowired
	private PersonRepository personRepository ;
	
	//get all persons
	
	@GetMapping("/persons")
	public List <Person> getAllPersons(){
		return personRepository.findAll();
		
	}
	
	// create person rest api
	@PostMapping("/persons")
	public Person createPerson ( @RequestBody Person person) {
		return personRepository.save(person);
	}
	
	// get person by id rest api
	@GetMapping("/persons/{id}")
	public ResponseEntity<Person> getPersonById(@PathVariable Long  id) {
		Person person = personRepository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Person not exist with id : " + id ));
		return ResponseEntity.ok(person);
	}
	
	// update person rest api
	@PutMapping("/persons/{id}")
	public ResponseEntity<Person> updatePerson(@PathVariable Long  id , @RequestBody Person personDetails){
		Person person = personRepository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Person not exist with id : " + id ));
		
		person.setFirstName(personDetails.getFirstName());
		person.setLastName(personDetails.getLastName());
		person.setDob(personDetails.getDob());
		person.setPhoneNum(personDetails.getPhoneNum());
		person.setNIC(personDetails.getNIC());
		person.setGender(personDetails.getGender());
		person.setAddress(personDetails.getAddress());
		
		Person updatePerson = personRepository.save(person);
		return ResponseEntity.ok(updatePerson);
	}
	
	// delete person rest api 
	@DeleteMapping("/persons/{id}")
	public ResponseEntity<Map <String , Boolean>> deletePerson(@PathVariable Long id){
		Person person = personRepository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Person not exist with id : " + id ));
		
		personRepository.delete(person);
		Map <String , Boolean> response = new HashMap<>();
		response.put("Deleted" , Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
