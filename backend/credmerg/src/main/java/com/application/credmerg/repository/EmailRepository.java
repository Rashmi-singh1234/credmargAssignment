package com.application.credmerg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.credmerg.entity.Email;

public interface EmailRepository extends JpaRepository<Email,Long>{
	
}
