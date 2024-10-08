package com.icbt.yehelee_server.service;

import java.util.List;

import com.icbt.yehelee_server.entity.Appointment;


public interface AppointmentService {

    Appointment createAppointment(Appointment appointment);
    Appointment getAppointmentByID(Long id);
    List<Appointment> getAllAppointments();
    void deleteAppointment(Long id);
    

    
} 