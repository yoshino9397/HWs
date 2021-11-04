package nov3hw.demo.src.com.service;

import java.util.List;

import nov3hw.demo.src.com.dao.EmployeeDAO;
import nov3hw.demo.src.com.dao.EmployeeDAOMySQLImpl;
import nov3hw.demo.src.com.dto.Employee;
import nov3hw.demo.src.com.exception.EmployeeNotFoundException;

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