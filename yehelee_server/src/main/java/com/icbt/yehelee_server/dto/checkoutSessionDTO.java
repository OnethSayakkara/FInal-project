package com.icbt.yehelee_server.dto;

import java.util.List;

public class checkoutSessionDTO {

    private String customerEmail;
    private List<ServiceItem> services;

    // Getters and Setters
    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public List<ServiceItem> getServices() {
        return services;
    }

    public void setServices(List<ServiceItem> services) {
        this.services = services;
    }
    
}
