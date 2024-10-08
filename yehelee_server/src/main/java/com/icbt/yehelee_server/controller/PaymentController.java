package com.icbt.yehelee_server.controller;

import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class PaymentController {

    public PaymentController() {
        Stripe.apiKey = "sk_test_51Q5pfgJCw3RRYEaoshfoI6NVLVSrEujQ0MJiUXImQd1N9CoN9CmbdO7sH5CoHcPtyzyaSujmGTMVGypjaGfnjJwn001fU4nD59";
    }

    @PostMapping("/auth/create-checkout-session")
    public Map<String, String> createCheckoutSession(@RequestBody CheckoutRequest request) throws Exception {
        Long amount = request.getTotalPrice() * 100; // Convert to cents
    
        // Create the Stripe Checkout session with metadata
        SessionCreateParams params = SessionCreateParams.builder()
            .setMode(SessionCreateParams.Mode.PAYMENT)
            .setSuccessUrl("http://localhost:5174/success") // URL for React success page
            .setCancelUrl("http://localhost:5174/cancel")
            .addLineItem(
                SessionCreateParams.LineItem.builder()
                    .setQuantity(1L)
                    .setPriceData(
                        SessionCreateParams.LineItem.PriceData.builder()
                            .setCurrency("lkr")
                            .setUnitAmount(amount)
                            .setProductData(
                                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                    .setName("Appointment Services")
                                    .build())
                            .build())
                    .build())
            .build();
    
        Session session = Session.create(params);
    
        // Save session details to database for future reference, include appointment metadata
        Map<String, String> responseData = new HashMap<>();
        responseData.put("id", session.getId());
        return responseData;
    }
}