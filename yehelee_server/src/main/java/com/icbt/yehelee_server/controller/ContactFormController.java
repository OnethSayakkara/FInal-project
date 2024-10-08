package com.icbt.yehelee_server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.icbt.yehelee_server.entity.ContactForm;
import com.icbt.yehelee_server.service.ContactFormService;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "*")
public class ContactFormController {

    @Autowired
    private ContactFormService contactFormService;

        @PostMapping("/auth/contactform")
        public ResponseEntity<ContactForm> createContactForm(@RequestBody ContactForm contactForm) {
        ContactForm savedContactForm = contactFormService.createContactForm(contactForm);
        return ResponseEntity.ok(savedContactForm);
    }

    @GetMapping("/auth/getcontactform")
    public ResponseEntity<List<ContactForm>> getAllContactForms() {
        List<ContactForm> contactForms = contactFormService.getAllContactForms();
        return ResponseEntity.ok(contactForms);
    }

         @DeleteMapping("/auth/c{id}")
    public ResponseEntity<Void> deleteContactForm(@PathVariable Long id) {
        contactFormService.deleteContactForm(id);
        return ResponseEntity.noContent().build();
    }
    
}
