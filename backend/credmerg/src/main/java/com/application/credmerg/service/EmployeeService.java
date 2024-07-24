package com.application.credmerg.service;

import java.util.List;

import com.application.credmerg.entity.Employee;

public interface EmployeeService {
    
	public Employee save(Employee emp);
	public List<Employee> findAll() ;
	
}
