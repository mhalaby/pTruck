package com.ptruck.persistence.truck;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "truck")
public class Truck {

    @Id
    @GeneratedValue
    private Long id;

    @NotEmpty
    private String name;

    @Column(columnDefinition = "text")
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
