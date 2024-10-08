package com.icbt.yehelee_server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import com.icbt.yehelee_server.entity.Staff;
import com.icbt.yehelee_server.repository.StaffRepository;

@Service
public class StaffServiceImpl implements StaffService {
   
    @Autowired
    private StaffRepository staffRepository;

    @Override 
    public List<Staff>  getAllStaff() {

      return staffRepository.findAll();
    }

    @Override
    public Staff getStaffbyId(Long id) {

        return staffRepository.findById(id).orElse(null);
    }

    @Override
    public Staff createStaff(Staff staff) {
        return staffRepository.save(staff);
    }

}
