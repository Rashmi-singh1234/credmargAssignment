package com.application.credmerg.service.impl.copy;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.credmerg.entity.Email;
import com.application.credmerg.entity.EmailRequest;
import com.application.credmerg.repository.EmailRepository;
import com.application.credmerg.service.EmailService;

@Service
public class EmailServiceImpl implements EmailService{
   
	@Autowired
	EmailRepository dao;
	
	@Override
	public Email sendEmail(String recipient, String subject, String body) {
		Email email = new Email();
        email.setRecipient(recipient);
        email.setSubject(subject);
        email.setBody(body);
        email.setSentAt(LocalDateTime.now());
        System.out.println("Sending email to " + recipient + " with subject " + subject);
        return dao.save(email);
	}

	@Override
	public List<Email> findAll() {
		List<Email> emailList=dao.findAll();
		return emailList;
	}

}
