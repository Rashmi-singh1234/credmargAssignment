package com.application.credmerg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.credmerg.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long>{

}
