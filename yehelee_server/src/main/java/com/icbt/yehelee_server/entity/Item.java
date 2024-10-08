package com.icbt.yehelee_server.entity;

import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long item_id;

    private String productName;

    private String description;

    private String category;

    private String brandName;

    private double price;
    
    private Integer qoh;

    @ElementCollection
    private List<String> productImageUrls;
}
