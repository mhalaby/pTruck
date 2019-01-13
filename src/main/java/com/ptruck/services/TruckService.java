package com.ptruck.services;

import com.ptruck.controllers.truck.TruckTransport;
import com.ptruck.exceptions.EntityNotFoundException;
import com.ptruck.persistence.truck.Truck;
import com.ptruck.persistence.truck.TruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TruckService {

    @Autowired
    private TruckRepository truckRepository;

    public Truck findOne(Long id) {
        Optional<Truck> truck = truckRepository.findById(id);
        if (!truck.isPresent()) {
            throw new EntityNotFoundException(Truck.class, id.toString());
        }
        return truck.get();
    }

    public List<Truck> findAll() {
        List<Truck> truckList = new ArrayList<>();
        Iterable<Truck> truckIterator = truckRepository.findAll();
        truckIterator.forEach(truckList::add);
        return truckList;
    }

    public Truck create(Truck truck) {
        return truckRepository.save(truck);
    }
}
