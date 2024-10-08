package com.icbt.yehelee_server.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.icbt.yehelee_server.entity.Staff;
import com.icbt.yehelee_server.service.StaffService;

@RestController
@CrossOrigin(origins = "*")
public class StaffController {

     @Autowired
    private StaffService staffService;

    @Autowired
    private PasswordEncoder passwordEncoder;

        @GetMapping("/auth/staff")
    public List<Staff>getAllStaff() {
        return staffService.getAllStaff();
    }
    

    @GetMapping("/staff/{id}")
    public Staff getStaffbyId(@PathVariable Long id) {
        return staffService.getStaffbyId(id);
    }
    
    @PostMapping("/auth/create_staff")
    public Staff createStaff(@RequestBody Staff staff) {

        staff.setPassword(passwordEncoder.encode(staff.getPassword()));
        return staffService.createStaff(staff);
    }
    
}
