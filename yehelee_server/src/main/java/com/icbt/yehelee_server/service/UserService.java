package com.icbt.yehelee_server.service;

import java.util.*;
import org.springframework.stereotype.Service;


import com.icbt.yehelee_server.entity.User;

@Service
public interface UserService {

    List<User> getAllUsers();
    User getUserbyId(Long id);
    User creatUser(User user);
} 

    

