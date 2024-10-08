package com.icbt.yehelee_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.icbt.yehelee_server.entity.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment , Long> {

    
}