package com.icbt.yehelee_server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.icbt.yehelee_server.entity.Services;

@Service
public interface ServiceService {

    List<Services> getAllServices();

    Services createsService(Services services);

    void deleteService(Long id);
    
} 