package com.icbt.yehelee_server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController; 
import com.icbt.yehelee_server.entity.Services;
import com.icbt.yehelee_server.service.ServiceService;

@RestController
@CrossOrigin(origins = "*")
public class ServicesController {

    @Autowired
    private ServiceService serviceService;

     @PostMapping("/auth/CreateService")
    public ResponseEntity<Services> createsService(@RequestBody Services services) {
        Services savedServices = serviceService.createsService(services);
        return ResponseEntity.ok(savedServices);
    }

    @GetMapping("/auth/getservices")
    public ResponseEntity<List<Services>> getAllServices() {
        List<Services> services = serviceService.getAllServices();
        return ResponseEntity.ok(services);
    }

     @DeleteMapping("/auth/s{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        serviceService.deleteService(id);
        return ResponseEntity.noContent().build();
    }
    
}
