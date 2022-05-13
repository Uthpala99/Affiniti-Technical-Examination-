package com.example.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springbootbackend.model.Bank;



public interface BankRepository extends JpaRepository<Bank , Long  >  {

}
