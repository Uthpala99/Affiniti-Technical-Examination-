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
import com.example.springbootbackend.model.Bank;
import com.example.springbootbackend.model.Person;
import com.example.springbootbackend.repository.BankRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BankController {
	@Autowired
	private BankRepository bankRepository ;
	
	//get all banks
	
	@GetMapping("/banks")
	public List <Bank> getAllBanks(){
		return bankRepository.findAll();
		
	}
	
	// create bank rest api
	@PostMapping("/banks")
	public Bank createPerson ( @RequestBody Bank bank) {
		return bankRepository.save(bank);
	}
	
	// get bank by id rest api
	@GetMapping("/banks/{id}")
	public ResponseEntity<Bank> getBankById(@PathVariable Long  id) {
		Bank bank = bankRepository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Bank not exist with id : " + id ));
		return ResponseEntity.ok(bank);
	}
	
	// update bank rest api
	@PutMapping("/banks/{id}")
	public ResponseEntity<Bank> updateBank(@PathVariable Long  id , @RequestBody Bank bankDetails){
		Bank bank = bankRepository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Bank not exist with id : " + id ));
		
		bank.setBankName(bankDetails.getBankName());
		
		Bank updateBank = bankRepository.save(bank);
		return ResponseEntity.ok(updateBank);
	}
	
	// delete bank rest api 
		@DeleteMapping("/banks/{id}")
		public ResponseEntity<Map <String , Boolean>> deleteBank(@PathVariable Long id){
			Bank bank = bankRepository.findById(id).
					orElseThrow(() -> new ResourceNotFoundException("Person not exist with id : " + id ));
			
			bankRepository.delete(bank);
			Map <String , Boolean> response = new HashMap<>();
			response.put("Deleted" , Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
