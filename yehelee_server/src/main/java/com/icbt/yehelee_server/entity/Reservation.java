package com.icbt.yehelee_server.entity;


import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String mobile;
    private String date;
    private String time;
    private double totalPrice;

    @ElementCollection
    private List<ReservationServices> facilities;

    @Embeddable
    @Getter
    @Setter
    public static class ReservationServices {
        
        private String serviceName;
    }
    
}
