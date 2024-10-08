package com.icbt.yehelee_server.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.icbt.yehelee_server.entity.User;
import com.icbt.yehelee_server.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

        @GetMapping("/users")
    public List<User>getAllUsers() {
        return userService.getAllUsers();
    }
    


    @GetMapping("/users/{id}")
    public User getUserbyId(@PathVariable Long id) {
        return userService.getUserbyId(id);
    }
    
    @PostMapping("/auth/signup")
    public User creatUser(@RequestBody User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userService.creatUser(user);
    }
    
}
