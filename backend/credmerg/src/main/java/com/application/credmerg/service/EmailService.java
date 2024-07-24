package com.application.credmerg.service;

import java.util.List;

import com.application.credmerg.entity.Email;
import com.application.credmerg.entity.EmailRequest;

public interface EmailService {
	public Email sendEmail(String recipient, String subject, String body);
	public List<Email> findAll();
}
