package com.icbt.yehelee_server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.icbt.yehelee_server.entity.User;



@Repository
public interface UserRepository extends JpaRepository <User , Long>{

    Optional<User> findByUserName(String userName);
} 
