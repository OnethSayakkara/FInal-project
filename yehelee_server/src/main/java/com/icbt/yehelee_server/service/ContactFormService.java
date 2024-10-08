package com.icbt.yehelee_server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.icbt.yehelee_server.entity.ContactForm;

@Service
public interface ContactFormService {

    List<ContactForm> getAllContactForms();

    ContactForm createContactForm(ContactForm contactForm);

    void deleteContactForm(Long id);
    
} 