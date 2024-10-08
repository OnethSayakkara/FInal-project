package com.icbt.yehelee_server.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.icbt.yehelee_server.entity.Services;
import com.icbt.yehelee_server.repository.ServiceRepository;

@Service
public class ServiceServiceImpl implements ServiceService{


    @Autowired
    private ServiceRepository serviceRepository;

    public Services createsService(Services services) {
        return serviceRepository.save(services);
    }

    public List<Services> getAllServices() {
        return serviceRepository.findAll();
    }

    @Override
    public void deleteService(Long id) {
        serviceRepository.deleteById(id);
    }



    
}
