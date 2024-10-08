package com.icbt.yehelee_server.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.icbt.yehelee_server.entity.Reservation;
import com.icbt.yehelee_server.repository.ReservationRepository;


@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Override
    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
    
}
