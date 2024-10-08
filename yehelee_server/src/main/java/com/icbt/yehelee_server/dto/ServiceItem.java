package com.icbt.yehelee_server.dto;

public class ServiceItem {
    private String serviceName;
    private long price;  // Price in cents


    // Getters and Setters
    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }
}
