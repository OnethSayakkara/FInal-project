package com.icbt.yehelee_server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.icbt.yehelee_server.entity.Item;

@Service
public interface ItemService {

    List<Item> getAllItems();
    Item getItembyId(Long id);
    Item createItem(Item item);
    void deleteItem(Long id);
    Item updateItem(Long id, Item item);
}