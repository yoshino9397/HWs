package com.service;

import java.util.List;

import com.dao.EmployeeDAO;
import com.dao.EmployeeDAOMySQLImpl;
import com.dto.Employee;
import com.exception.EmployeeNotFoundException;

public class EmployeeServiceImpl implements EmployeeService{
	
	public EmployeeDAO empDAO = new EmployeeDAOMySQLImpl();

	@Override
	public List<Employee> showAllEmployees() {
		return empDAO.showAllEmployees();
	}

	@Override
	public void addEmployee(Employee e) {
		empDAO.addEmployee(e);
	}

	@Override
	public void deleteEmployee(int id) {
		empDAO.deleteEmployee(id);
		
	}

	@Override
	public void updateEmployee(Employee e) {
		
		
	}

	@Override
	public Employee findEmployee(Employee e) throws EmployeeNotFoundException {
		return empDAO.findEmployee(e);
	}

}