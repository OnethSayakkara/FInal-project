package com.icbt.yehelee_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.icbt.yehelee_server.entity.Services;


@Repository
public interface ServiceRepository extends JpaRepository <Services , Long> {
    
}
