package com.icbt.yehelee_server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@RestController
@CrossOrigin(origins = "*")
public class EmailController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/auth/send")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        try {
            // Create a MimeMessage
            MimeMessage message = mailSender.createMimeMessage();
    
            // Use MimeMessageHelper to set up the email
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(emailRequest.getTo());
            helper.setSubject("Happy Birthday!");
            helper.setText("<h1>Wishing you a wonderful birthday! 🎉</h1><br><img src='cid:myImage' />", true);
    
            // Load the image from the resources folder
            ClassPathResource resource = new ClassPathResource("images/sample.png"); // Specify your image path here
            helper.addInline("myImage", resource);
            
            // Send the email
            mailSender.send(message);
            return "Email sent successfully!";
        } catch (Exception e) {
            e.printStackTrace(); // Print stack trace for detailed error
            return "Failed to send email: " + e.getMessage(); // Return error message
        }
    }
}

class EmailRequest {
    private String to;

    public String getTo() { return to; }
    public void setTo(String to) { this.to = to; }
}
