package com.icbt.yehelee_server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.icbt.yehelee_server.entity.ContactForm;
import com.icbt.yehelee_server.repository.ContactRepository;

@Service
public class ContactFormServiceImpl implements ContactFormService {

    @Autowired
    private ContactRepository contactRepository;

        public ContactForm createContactForm(ContactForm contactForm) {
        return contactRepository.save(contactForm);
    }


        public List<ContactForm> getAllContactForms() {
        return contactRepository.findAll();
    }

    @Override
    public void deleteContactForm(Long id) {
        contactRepository.deleteById(id);
    } 
}
