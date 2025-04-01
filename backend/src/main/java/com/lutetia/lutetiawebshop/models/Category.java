package com.lutetia.lutetiawebshop.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Category {

    @Id
    @GeneratedValue
    @Column(name = "category_id")
    private long id;

    @JoinColumn(name = "category_name")
    private String name;

    @OneToMany(mappedBy = "category")
    @JsonBackReference
    private List<Product> products;

    public Category() {}

    public Category(String name) {
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
