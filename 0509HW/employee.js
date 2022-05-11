const employee = (name, email, department, startDate) => {
  const info = {
    name,
    email,
    department,
    startDate,
  };
};

class person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  greeting() {
    return `Hello! My name is ${this.name}, and my email is ${this.email}.`;
  }
}

export default person;
