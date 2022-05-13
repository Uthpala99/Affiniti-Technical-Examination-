package com.example.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.springbootbackend.model.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person , Long  >  {

}
