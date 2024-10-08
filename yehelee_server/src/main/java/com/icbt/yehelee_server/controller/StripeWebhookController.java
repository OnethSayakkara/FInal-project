package com.icbt.yehelee_server.controller;

import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StripeWebhookController {

    private static final String STRIPE_WEBHOOK_SECRET = "your_webhook_secret_here";

    @PostMapping("/webhook")
    public String handleStripeWebhook(@RequestBody String payload, @RequestHeader("Stripe-Signature") String sigHeader) {
        try {
            Event event = Webhook.constructEvent(payload, sigHeader, STRIPE_WEBHOOK_SECRET);

            if ("checkout.session.completed".equals(event.getType())) {
                Session session = (Session) event.getData().getObject();
                // Retrieve the appointment details from session metadata
                String appointmentId = session.getMetadata().get("appointment_id");
                
                // Logic to save appointment data into the database
                saveAppointment(appointmentId);
            }

            return "Success";
        } catch (Exception e) {
            return "Webhook Error: " + e.getMessage();
        }
    }

    public void saveAppointment(String appointmentId) {
        // Your logic to save the appointment to the database
    }
}
