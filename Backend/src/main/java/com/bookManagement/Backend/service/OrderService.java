package com.bookManagement.Backend.service;

import com.bookManagement.Backend.model.Book;
import com.bookManagement.Backend.model.Order;
import com.bookManagement.Backend.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;
    @Autowired
    BookService bookService;
    public void createOrder(String sellerId,Integer bookId,String buyerId){
        Order order=new Order(bookId,buyerId,sellerId);
        orderRepo.save(order);

    }



    public List<Book> getAllBooks(String buyerId){
        List<Order> orders=orderRepo.findOrderBy(buyerId);
        if(orders.isEmpty())
            return new ArrayList<>();
        List<Book> books=new ArrayList<>();
        for(Order o:orders){
            Optional<Book> b=bookService.findBook(o.getBookId(),o.getSellerId());
            if(b.isPresent()){
                books.add(b.get());
            }
        }
        return books;
    }
}
