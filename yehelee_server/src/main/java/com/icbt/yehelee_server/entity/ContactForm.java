package com.icbt.yehelee_server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ContactForm {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Contact_id;

    private String fullname;

    private int whatsApp;

    private String email;

    private  String note;






    
}
