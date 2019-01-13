package com.ptruck.controllers.truck;

import com.ptruck.persistence.truck.Truck;
import com.ptruck.services.TruckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping({"/api/truck"})
public class TruckController {

    @Autowired
    private TruckService truckService;
    @Autowired
    private TruckMapper truckMapper;

    @GetMapping("/{id}")
    @ResponseBody
    public TruckTransport findById(@PathVariable Long id) {
        Truck truck = truckService.findOne(id);
        return truckMapper.toTruckTransport(truck);
    }

    @PostMapping
    public TruckTransport create(@RequestBody TruckTransport truckTransport) {
        Truck truck = truckService.create(truckMapper.toTruck(truckTransport));
        return truckMapper.toTruckTransport(truck);
    }
    @GetMapping
    public List<TruckTransport> findAll() {
        List<Truck> trucks = truckService.findAll();
        return trucks.stream().map(truckMapper::toTruckTransport).collect(Collectors.toList());
    }
}
