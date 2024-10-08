package com.icbt.yehelee_server.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


@Entity
@Getter
@Setter
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    @Column(name = "mobile")
    private String mobileNumber;
    private String date;
    private String time;
    private double totalPrice;
    
    @ElementCollection
    private List<AppointmentServices> services;

    @Embeddable
    @Getter
    @Setter
    public static class AppointmentServices {
        
        private String serviceName;
    }
    
}
