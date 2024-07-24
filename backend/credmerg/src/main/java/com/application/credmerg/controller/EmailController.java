package com.application.credmerg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.credmerg.entity.Email;
import com.application.credmerg.entity.EmailRequest;
import com.application.credmerg.service.EmailService;

@RestController
@RequestMapping("/api/emails")
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {
    @Autowired
    private EmailService service;

    @GetMapping("/findemails")
    public List<Email> getAllEmails() {
        return service.getAll();
    }

}
