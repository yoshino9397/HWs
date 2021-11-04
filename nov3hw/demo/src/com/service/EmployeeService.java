package nov3hw.demo.src.com.service;

import java.util.List;

import nov3hw.demo.src.com.dto.Employee;
import nov3hw.demo.src.com.exception.EmployeeNotFoundException;

public interface EmployeeService {

	public List<Employee> showAllEmployees();
	
	public abstract void addEmployee(Employee e);
	public abstract void deleteEmployee(int id);
	public abstract void updateEmployee(Employee e);
	public abstract Employee findEmployee(Employee e) throws EmployeeNotFoundException;
	
}