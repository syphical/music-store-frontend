package com.lutetia.lutetiawebshop.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.lutetia.lutetiawebshop.models.Category;
import com.lutetia.lutetiawebshop.models.Genre;
import com.lutetia.lutetiawebshop.models.Artist;

import java.math.BigDecimal;

public class ProductDTO {
    public long id;
    public String name;
    public double price;
    public String description;
    public Integer stock;

    @JsonAlias("release_date")
    public String releaseDate;

    @JsonAlias("artist_id")
    public Artist artist;

    @JsonAlias("genre_id")
    public Genre genre;

    @JsonAlias("category_id")
    public Category category;

    public ProductDTO(long id, String name, double price, String description, Integer stock, String releaseDate, Artist artist, Genre genre, Category category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.releaseDate = releaseDate;
        this.artist = artist;
        this.genre = genre;
        this.category = category;
    }
}
