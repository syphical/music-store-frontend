package com.lutetia.lutetiawebshop.models;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.math.BigDecimal;

@Entity
public class Product {

    @Id
    @GeneratedValue
    @Column(name = "product_id")
    private long id;

    private String name;
    private double price;

    @Column(columnDefinition = "TEXT")
    private String description;

    private Integer stock;
    private String releaseDate;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private Artist artist;

    @ManyToOne
    @JoinColumn(name = "genre_id")
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private Genre genre;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private Category category;

    public Product() {
    }

    public Product(String name, double price, String description, Integer stock, String releaseDate, Artist artist, Genre genre, Category category) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.releaseDate = releaseDate;
        this.artist = artist;
        this.genre = genre;
        this.category = category;
    }

    public Product(String name, double price, Integer stock, String releaseDate, Artist artist, Genre genre, Category category) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.releaseDate = releaseDate;
        this.artist = artist;
        this.genre = genre;
        this.category = category;
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
