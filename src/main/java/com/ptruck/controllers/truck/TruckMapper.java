package com.ptruck.controllers.truck;

import com.ptruck.persistence.truck.Truck;
import org.springframework.stereotype.Component;

@Component
public class TruckMapper {

    public TruckTransport toTruckTransport(Truck truck) {
        TruckTransport truckTransport = new TruckTransport();
        truckTransport.setId(truck.getId());
        truckTransport.setDescription(truck.getDescription());
        truckTransport.setName(truck.getName());
        return truckTransport;
    }
    public Truck toTruck(TruckTransport transport) {
        Truck truck = new Truck();
        truck.setDescription(transport.getDescription());
        truck.setName(transport.getName());
        return truck;
    }
}
