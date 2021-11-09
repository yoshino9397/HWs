package com.spring.pma.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring.pma.dao.iEmployeeRepository;
import com.spring.pma.entity.Employee;

@Controller
@RequestMapping("/employees")
public class EmployeeController {

  @Autowired
  iEmployeeRepository empRepo;

  // @RequestMapping("/new")
  @GetMapping("/new")
  public String displayEmployeeForm(Model model) {
    model.addAttribute("employee", new Employee());
    return "employees/new-employee";
  }

  // @RequestMapping(value = "/save", method = RequestMethod.POST)
  @PostMapping("/save")
  public String createEmployee(Employee employee, Model model) {
    // this is where we save to database
    empRepo.save(employee);
    return "redirect:/employees/new";
  }
}