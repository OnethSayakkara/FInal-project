package com.icbt.yehelee_server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.icbt.yehelee_server.entity.EmailRequest;

import jakarta.mail.internet.MimeMessage;

@RestController
@CrossOrigin(origins = "*")
public class ResponseController {

    @Autowired
    private JavaMailSender mailSender;

   @PostMapping("/auth/response")
public String sendEmail(@RequestBody EmailRequest emailRequest) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(emailRequest.getTo());
            helper.setSubject("Response to your note");

            // Create the email content
            String emailContent = "<h1>Hi " + emailRequest.getFullname() + ",</h1>" +
                                  "<blockquote>" + emailRequest.getResponseNote() + "</blockquote>" +
                                  "<br><p>Best regards,<br>Salon Yehelee</p>";

            helper.setText(emailContent, true);

            // Send the email
            mailSender.send(message);
            return "Email sent successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to send email.";
        }
    }

}


 

// A class to handle the request body
