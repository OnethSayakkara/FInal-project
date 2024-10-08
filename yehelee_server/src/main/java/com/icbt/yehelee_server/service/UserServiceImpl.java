package com.icbt.yehelee_server.service;

import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.icbt.yehelee_server.entity.User;
import com.icbt.yehelee_server.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override 
    public List<User>  getAllUsers() {

      return userRepository.findAll();
    }

    @Override
    public User getUserbyId(Long id) {

        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User creatUser(User user) {
        return userRepository.save(user);
    }

    
}
