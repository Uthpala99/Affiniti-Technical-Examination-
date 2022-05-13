package com.example.springbootbackend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "persons")
public class Person {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long personID ;
	
	@Column(name = "first_name")
	private String firstName ;
	
	@Column(name = "last_name")
	private String lastName ;
	
	@Column(name = "dob")
	private Date dob ;
	
	@Column(name = "phone_num")
	private String phoneNum ;
	
	@Column(name = "nic")
	private String NIC ;
	
	@Column(name = "gender")
	private String gender ;
	
	@Column(name = "address")
	private String address ;
	
	public Person() {
		
	}

	public Person(String firstName, String lastName, Date dob, String phoneNum, String nIC, String gender,
			String address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.phoneNum = phoneNum;
		this.NIC = nIC;
		this.gender = gender;
		this.address = address;
	}
	
	public long getPersonID() {
		return personID;
	}
	public void setPersonID(long personID) {
		this.personID = personID;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getPhoneNum() {
		return phoneNum;
	}
	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}
	public String getNIC() {
		return NIC;
	}
	public void setNIC(String nIC) {
		this.NIC = nIC;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
}
