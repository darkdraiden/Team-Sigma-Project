package com.bookManagement.Backend.controller;

import com.bookManagement.Backend.model.Book;
import com.bookManagement.Backend.service.BookService;
import com.bookManagement.Backend.service.OrderService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class OrderController {
    @Autowired
    BookService bookService;
    @Autowired
    OrderService orderService;
     @PostMapping("home/buy")
     @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Map<String,String>> createOrder(@RequestBody Map<String,String> req){
         System.out.println("asdgkhasgd");
         Map<String,String> response=new HashMap<>();
         Integer bookId= Integer.parseInt(req.get("bookId"));
         String sellerId=req.get("sellerId");

         String buyerId=req.get("buyerId");

         Optional<Book> b=bookService.findBook(bookId,sellerId);
         if(b.isEmpty()) {
             response.put("status", "Book Not Found");
//             response.put("message", "Book deleted");
             return ResponseEntity.ok(response);
         }
         Book existing=b.get();
         int q= existing.getQuantity();
         if(q<=0){
             response.put("status", "Error");
             response.put("message", "Out of Stock");
             return ResponseEntity.ok(response);
         }
         existing.setQuantity(q-1);
         bookService.addBook(existing);
         orderService.createOrder(sellerId, bookId, buyerId);
         response.put("status", "Success");
         response.put("message", "Order successful");
         return ResponseEntity.ok(response);
     }


     @GetMapping("home/myStock/{buyerId}")
     @CrossOrigin(origins = "http://localhost:4200")
    public List<Book> myStock(@PathVariable String buyerId){
         System.out.println("my stock");
            return orderService.getAllBooks(buyerId);
     }
}
