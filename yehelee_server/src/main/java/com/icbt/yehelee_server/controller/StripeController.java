package com.icbt.yehelee_server.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.icbt.yehelee_server.dto.ServiceItem;
import com.icbt.yehelee_server.dto.checkoutSessionDTO;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;

public class StripeController {
    @PostMapping("/auth/create-checkout-session")
    public ResponseEntity<Map<String, String>> createCheckoutSession(@RequestBody checkoutSessionDTO checkoutSession) throws StripeException {
        Stripe.apiKey = "sk_test_51Q5pfgJCw3RRYEaoshfoI6NVLVSrEujQ0MJiUXImQd1N9CoN9CmbdO7sH5CoHcPtyzyaSujmGTMVGypjaGfnjJwn001fU4nD59";

        List<SessionCreateParams.LineItem> lineItems = new ArrayList<>();
        for (ServiceItem serviceItem : checkoutSession.getServices()) {
            lineItems.add(
                SessionCreateParams.LineItem.builder()
                    .setPriceData(
                        SessionCreateParams.LineItem.PriceData.builder()
                            .setCurrency("usd")
                            .setUnitAmount(serviceItem.getPrice() * 100)
                            .setProductData(
                                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                    .setName(serviceItem.getServiceName())
                                    .build())
                            .build())
                    .setQuantity(1L)
                    .build());
        }

        SessionCreateParams params =
            SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:5174/success")
                .setCancelUrl("http://localhost:3000/cancel")
                .addAllLineItem(lineItems)
                .build();

        Session session = Session.create(params);

        Map<String, String> responseData = new HashMap<>();
        responseData.put("id", session.getId());

        return ResponseEntity.ok(responseData);
    }
}
