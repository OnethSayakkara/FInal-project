package com.icbt.yehelee_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.icbt.yehelee_server.entity.ContactForm;

public interface ContactRepository  extends JpaRepository < ContactForm , Long >{
    
}
