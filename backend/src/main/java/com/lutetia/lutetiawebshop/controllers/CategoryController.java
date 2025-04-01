package com.lutetia.lutetiawebshop.controllers;

import com.lutetia.lutetiawebshop.dao.CategoryDAO;
import com.lutetia.lutetiawebshop.dto.CategoryDTO;
import com.lutetia.lutetiawebshop.dto.GenreDTO;
import com.lutetia.lutetiawebshop.models.Category;
import com.lutetia.lutetiawebshop.models.Genre;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://s1157305.student.inf-hsleiden.nl:17305"})
@RequestMapping("/categories")
public class CategoryController {
    private CategoryDAO categoryDAO;

    public CategoryController(CategoryDAO categoryDAO) {
        this.categoryDAO = categoryDAO;
    }

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryDAO.getAllCategories();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDTO> getCategoryById(@PathVariable long id) {
        Category category = categoryDAO.getCategoryById(id);
        return new ResponseEntity<>(new CategoryDTO(category.getId(), category.getName()), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> createCategory(@RequestBody CategoryDTO categoryDTO) {
        this.categoryDAO.createCategory(categoryDTO);
        return ResponseEntity.ok("Category created");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateCategory(@PathVariable long id, @RequestBody CategoryDTO categoryDTO) {
        this.categoryDAO.updateCategory(id, categoryDTO);
        return ResponseEntity.ok("Category #" + id + " updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable long id) {
        this.categoryDAO.deleteCategory(id);
        return ResponseEntity.ok("Category #" + id + " deleted successfully");
    }
}
