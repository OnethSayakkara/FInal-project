package com.icbt.yehelee_server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.icbt.yehelee_server.entity.Category;

@Service
public interface CategoryService {

    List<Category> getAllCategories();

    Category createCategory(Category category);

    void deleteCategory(Long id);

    
} 
