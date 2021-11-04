package nov3hw.demo.src.com.exception;

public class EmployeeNotFoundException extends Exception {
	
	private int id;

	public EmployeeNotFoundException(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Employee Not Found Exception";
	}
}