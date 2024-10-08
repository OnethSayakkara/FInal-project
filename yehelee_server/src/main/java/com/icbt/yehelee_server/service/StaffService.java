package com.icbt.yehelee_server.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.icbt.yehelee_server.entity.Staff;

@Service
public interface StaffService {

    List<Staff> getAllStaff();
    Staff getStaffbyId(Long id);
    Staff createStaff(Staff staff);
    
} 