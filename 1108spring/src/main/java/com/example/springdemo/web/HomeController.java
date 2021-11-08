package com.example.springdemo.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.springdemo.domain.users;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String home(Model model) {
//		return "pages/index"; //prepend pages
		model.addAttribute("formData", new users());
		return "index";
	}
	
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public String processFormData(users user, RedirectAttributes attr) {
		attr.addFlashAttribute("user", user);
		return "redirect:display"; // redirect to "localhost:8080/display
	}
	
	@RequestMapping("/display")
	public String displayFormData(users user) {
		return "result";
	}
	
}