package com.application.credmerg.entity;

import javax.persistence.Entity;

import lombok.Data;

public class EmailRequest {
	private String recipient;
    private String name;
    private String upi;
	    public String getRecipient() {
		return recipient;
	}
	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUpi() {
		return upi;
	}
	public void setUpi(String upi) {
		this.upi = upi;
	}
	
}
