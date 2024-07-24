package com.application.credmerg.service.impl.copy;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.credmerg.entity.Email;
import com.application.credmerg.entity.EmailRequest;
import com.application.credmerg.entity.Vendor;
import com.application.credmerg.repository.EmailRepository;
import com.application.credmerg.service.EmailService;

@Service
public class EmailServiceImpl implements EmailService{
   
	@Autowired
	EmailRepository dao;

	@Override
	public List<Email> getAll() {
		return dao.findAll();
	}

}
