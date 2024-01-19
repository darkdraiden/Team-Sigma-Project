package com.bookManagement.Backend.controller;

import com.bookManagement.Backend.model.User;
import com.bookManagement.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/home")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/users")
    public List<User> getUser(){
        System.out.println("getting users");
        return this.userService.getUserList();
    }

}
