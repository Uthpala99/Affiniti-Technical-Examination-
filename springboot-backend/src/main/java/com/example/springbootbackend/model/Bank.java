package com.example.springbootbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "banks")
public class Bank {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long bankID ;
	
	@Column(name = "bank_name")
	private String bankName ;

	
	public Bank () {
		
	}
	
	public Bank(long bankID, String bankName) {
		super();
		this.bankID = bankID;
		this.bankName = bankName;
	}

	public long getBankID() {
		return bankID;
	}

	public void setBankID(long bankID) {
		this.bankID = bankID;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	
	
	
}
