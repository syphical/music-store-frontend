package com.lutetia.lutetiawebshop.dao;

import com.lutetia.lutetiawebshop.dto.CategoryDTO;
import com.lutetia.lutetiawebshop.dto.GenreDTO;
import com.lutetia.lutetiawebshop.models.Category;
import com.lutetia.lutetiawebshop.models.Genre;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CategoryDAO {

    private CategoryRepository categoryRepository;

    public CategoryDAO(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(long id) {
        return categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
    }

    public void createCategory(CategoryDTO categoryDTO) {
        Category category = new Category(categoryDTO.name);
        categoryRepository.save(category);
    }

    public void updateCategory(Long id, CategoryDTO categoryDTO) {
        Optional<Category> optionalCategory = this.categoryRepository.findById(id);
        if (optionalCategory.isPresent()) {
            Category category = optionalCategory.get();
            category.setName(categoryDTO.name);
            categoryRepository.save(category);
        } else {
            throw new RuntimeException("Category not found");
        }
    }

    public void deleteCategory(Long id) {
        Optional<Category> optionalCategory = this.categoryRepository.findById(id);
        if (optionalCategory.isPresent()) {
            this.categoryRepository.deleteById(id);
        } else {
            throw new RuntimeException("Category not found");
        }
    }
}
