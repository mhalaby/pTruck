package com.ptruck.persistence.truck;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TruckRepository  extends CrudRepository<Truck,Long> {
// Since we are extending jpaRepository no need to write this. JPaRepository handles simple CRUD
//    @Query("select a from Truck a where a.id = :id")
//    Truck findOne(@Param("id") String id);
}
