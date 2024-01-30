package com.bookManagement.Backend.service;

import com.bookManagement.Backend.model.Book;
import com.bookManagement.Backend.model.Order;
import com.bookManagement.Backend.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;
    @Autowired
    BookService bookService;
    public void createOrder(String sellerId,Integer bookId,String buyerId){
        Order order=new Order(bookId,buyerId,sellerId,new Date());
        orderRepo.save(order);

    }



    public List<Map<String,String>> getAllBooks(String buyerId){
        List<Order> orders=orderRepo.findOrderBy(buyerId);
        if(orders.isEmpty())
            return new ArrayList<>();
        List<Map<String,String>> books=new ArrayList<>();
        for(Order o:orders){
            Optional<Book> b=bookService.findBook(o.getBookId(),o.getSellerId());
            Map<String,String> m=new HashMap<>();
            if(b.isPresent()){
                m.put("bookId",b.get().getBookId().toString());
                m.put("bookName",b.get().getBookName());
                m.put("bookDescription",b.get().getBookDescription());
                m.put("price",b.get().getPrice().toString());
                m.put("author",b.get().getAuthor());
                m.put("quantity",b.get().getQuantity().toString());
                m.put("sellerId",b.get().getSellerId());
                m.put("genre",b.get().getGenre().toString());
                m.put("date",o.getDate().toString());
                books.add(m);

            }
        }
        return books;
    }
}
