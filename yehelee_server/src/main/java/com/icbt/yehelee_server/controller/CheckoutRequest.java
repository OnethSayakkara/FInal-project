package com.icbt.yehelee_server.controller;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CheckoutRequest {
    private Map<String, List<String>> selectedServices;
    private Long totalPrice;

    // Getters and Setters
    public Map<String, List<String>> getSelectedServices() {
        return selectedServices;
    }

    public void setSelectedServices(Map<String, List<String>> selectedServices) {
        this.selectedServices = selectedServices;
    }

    public Long getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Long totalPrice) {
        this.totalPrice = totalPrice;
    }
}
