package com.lutetia.lutetiawebshop.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Artist {

    @Id
    @GeneratedValue
    @Column(name = "artist_id")
    private long id;

    @JoinColumn(name = "artist_name")
    private String name;

    @OneToMany(mappedBy = "artist")
    @JsonBackReference
    private List<Product> products;

    public Artist() {}

    public Artist(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
