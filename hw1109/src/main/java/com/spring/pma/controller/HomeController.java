package com.spring.pma.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.spring.pma.dao.iProjectRepository;
import com.spring.pma.entity.Project;
import com.spring.pma.dao.iEmployeeRepository;
import com.spring.pma.entity.Employee;

@Controller
public class HomeController {

  @Autowired
  iProjectRepository proRepo;
  iEmployeeRepository empRepo;

  @GetMapping("/")
  public String displayHome(Model model) {
    List<Project> projects = proRepo.findAll();
    model.addAttribute("projectList", projects);
    return "main/home";
  }

  public String displayHomeEmp(Model model) {
    List<Employee> employees = empRepo.findAll();
    model.addAttribute("employeeList", employees);
    return "main/home";
  }

}