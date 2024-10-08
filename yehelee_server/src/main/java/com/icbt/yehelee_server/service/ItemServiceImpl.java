package com.icbt.yehelee_server.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icbt.yehelee_server.entity.Item;
import com.icbt.yehelee_server.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService{
    
    @Autowired
    private ItemRepository itemRepository;

    @Override
    public List<Item> getAllItems() {

        return itemRepository.findAll();
    }
    
    @Override
    public Item getItembyId(Long id) {
        
        return itemRepository.findById(id).orElse(null);
    }

    @Override
    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    @Override
    public Item updateItem(Long id, Item item) {
        Optional<Item> existingProduct = itemRepository.findById(id);
        if (existingProduct.isPresent()) {
            Item updateItem = existingProduct.get();
            updateItem.setProductName(item.getProductName());
            updateItem.setBrandName(item.getBrandName());
            updateItem.setCategory(item.getCategory());
            updateItem.setPrice(item.getPrice());
            updateItem.setQoh(item.getQoh());
            updateItem.setProductImageUrls(item.getProductImageUrls());
            return itemRepository.save(updateItem);
        } else {
            throw new RuntimeException("Product not found with id: " + id);
        }
    }
}
