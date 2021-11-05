package com.dao;

import java.util.List;

import com.dto.Employee;
import com.exception.EmployeeNotFoundException;

public interface EmployeeDAO {

	public static final String URL = "jdbc:mysql://localhost:3306/employees_database";
	public static final String USERNAME = "root";
	public static final String PASSWORD = "root";
	public static final String DRIVER_CLASSNAME = "com.mysql.jdbc.Driver";
	
	public List<Employee> showAllEmployees();
	
	public abstract void addEmployee(Employee e);
	public abstract void deleteEmployee(int id);
	public abstract void updateEmployee(Employee e);
	public abstract Employee findEmployee(Employee e) throws EmployeeNotFoundException;
	
}
