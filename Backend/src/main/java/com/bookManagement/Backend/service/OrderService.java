package com.bookManagement.Backend.service;

import com.bookManagement.Backend.model.Order;
import com.bookManagement.Backend.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;
    public void createOrder(String sellerId,Integer bookId,String buyerId){
        Order order=new Order(bookId,buyerId,sellerId);
        orderRepo.save(order);

    }
}
