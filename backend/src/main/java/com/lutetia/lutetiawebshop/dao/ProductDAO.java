package com.lutetia.lutetiawebshop.dao;

import com.lutetia.lutetiawebshop.dto.ProductDTO;
import com.lutetia.lutetiawebshop.models.Product;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ProductDAO {

    private ProductRepository productRepository;

    public ProductDAO(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public void createProduct(ProductDTO productDTO) {
        Product product = new Product(productDTO.name, productDTO.price, productDTO.description, productDTO.stock, productDTO.releaseDate, productDTO.artist, productDTO.genre, productDTO.category);
        productRepository.save(product);
    }

    public void updateProduct(Long id, ProductDTO productDTO) {
        Optional<Product> optionalProduct = this.productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.setName(productDTO.name);
            product.setPrice(productDTO.price);
            product.setDescription(productDTO.description);
            product.setStock(productDTO.stock);
            product.setReleaseDate(productDTO.releaseDate);
            product.setArtist(productDTO.artist);
            product.setGenre(productDTO.genre);
            product.setCategory(productDTO.category);
            productRepository.save(product);
        } else {
            throw new RuntimeException("Product not found");
        }
    }

    public void deleteProduct(Long id) {
        Optional<Product> optionalProduct = this.productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            this.productRepository.deleteById(id);
        } else {
            throw new RuntimeException("Product not found");
        }
    }
}
