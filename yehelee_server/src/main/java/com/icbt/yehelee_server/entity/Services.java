package com.icbt.yehelee_server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Services {

@Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)    
private long serviceId;

private String serviceName;

private String category;

private double price;
 
}
