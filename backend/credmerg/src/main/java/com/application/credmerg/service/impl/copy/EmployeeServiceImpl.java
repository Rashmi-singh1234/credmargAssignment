package com.application.credmerg.service.impl.copy;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.credmerg.entity.Employee;
import com.application.credmerg.repository.EmployeeRepository;
import com.application.credmerg.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository dao;

	@Override
	public Employee save(Employee emp) {
		dao.save(emp);
        return emp;
	}

	@Override
	public List<Employee> findAll() {
		List<Employee> empList=dao.findAll();
		return empList;
	}


}
