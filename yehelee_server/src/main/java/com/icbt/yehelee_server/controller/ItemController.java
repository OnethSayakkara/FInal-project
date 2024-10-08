package com.icbt.yehelee_server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.icbt.yehelee_server.entity.Item;
import com.icbt.yehelee_server.service.ItemService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins = "*")
public class ItemController {
    
    @Autowired
    private ItemService itemService;

    @GetMapping("/auth/product")

    public List<Item>getAllItems() {
        return itemService.getAllItems();
    }
    
    @GetMapping("/auth/p{id}")
    public Item getItembyId(@PathVariable Long id) {
        return itemService.getItembyId(id);
    }

        @PostMapping("/auth/items")
        public ResponseEntity<Item> createProduct(@RequestBody Item item) {
        Item savedProduct = itemService.createItem(item);
        return ResponseEntity.ok(savedProduct);
    }

        @DeleteMapping("/auth/i{id}")
        public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }

    
    @PutMapping("/auth/u{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item item) {
        Item updateItem = itemService.updateItem(id, item);
        return ResponseEntity.ok(updateItem);
    }
    
    

    
}
