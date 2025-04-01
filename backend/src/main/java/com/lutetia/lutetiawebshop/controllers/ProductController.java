package com.lutetia.lutetiawebshop.controllers;

import com.lutetia.lutetiawebshop.dao.ProductDAO;
import com.lutetia.lutetiawebshop.dto.ProductDTO;
import com.lutetia.lutetiawebshop.models.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://s1157305.student.inf-hsleiden.nl:17305"})
@RequestMapping("/products")
public class ProductController {
    private ProductDAO productDAO;

    public ProductController(ProductDAO productDAO) {
        this.productDAO = productDAO;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productDAO.getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable long id) {
        Product product = productDAO.getProductById(id);
        return new ResponseEntity<>(new ProductDTO(
                product.getId(),
                product.getName(),
                product.getPrice(),
                product.getDescription(),
                product.getStock(),
                product.getReleaseDate(),
                product.getArtist(),
                product.getGenre(),
                product.getCategory()),
                HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> createProduct(@RequestBody ProductDTO productDTO) {
        this.productDAO.createProduct(productDTO);
        return ResponseEntity.ok("Product created");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable long id, @RequestBody ProductDTO productDTO) {
        this.productDAO.updateProduct(id, productDTO);
        return ResponseEntity.ok("Product #" + id + " updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable long id) {
        this.productDAO.deleteProduct(id);
        return ResponseEntity.ok("Product #" + id + " deleted successfully");
    }
}
