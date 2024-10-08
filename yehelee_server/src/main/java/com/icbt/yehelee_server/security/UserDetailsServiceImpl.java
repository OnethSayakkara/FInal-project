package com.icbt.yehelee_server.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import com.icbt.yehelee_server.repository.UserRepository;
import com.icbt.yehelee_server.entity.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
   
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {

        User user = userRepository.findByUserName(username).orElse(null);

        if (user == null) {

            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return org.springframework.security.core.userdetails.User.builder()
               .username(user.getUserName())
               .password(user.getPassword())
               .build();

    }
}
