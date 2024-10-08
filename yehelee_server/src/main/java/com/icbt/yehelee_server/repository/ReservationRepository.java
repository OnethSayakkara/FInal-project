package com.icbt.yehelee_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icbt.yehelee_server.entity.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation , Long>{
    
}
