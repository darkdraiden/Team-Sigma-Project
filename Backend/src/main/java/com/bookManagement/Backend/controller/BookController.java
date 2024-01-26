package com.bookManagement.Backend.controller;

import com.bookManagement.Backend.model.Book;
import com.bookManagement.Backend.model.BookId;
import com.bookManagement.Backend.model.BookRequest;
import com.bookManagement.Backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
//@RequestMapping("/home")
public class BookController {
    @Autowired
    private BookService bookService;
    @PostMapping("home/create-book")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Map<String, String>> createBook(@RequestBody Book book){
        System.out.println("client");
        Integer bookId = book.getBookId();
        String sellerId = book.getSellerId();
        Map<String, String> response = new HashMap<>();

        if(bookService.doesExists(bookId, sellerId)){
            int quantity=book.getQuantity();
            book.setQuantity(quantity + 1);
            bookService.addBook(book);
            response.put("status", "Book already exists");
            response.put("message", "Quantity updated");
        } else {
            bookService.addBook(book);
            response.put("status", "Book created");
            response.put("message", "Book added successfully");
        }

        return ResponseEntity.ok(response);
    }




    //list of books
    @GetMapping("/books")
    public List<Book> showBooks(){
        System.out.println("on books");
        return bookService.getAllBooks();
    }


    @PutMapping("/home/sell/update")
    public ResponseEntity<Map<String,String>> updateBook(@RequestBody Book book){
        Map<String, String> response = new HashMap<>();
        if(!bookService.doesExists(book.getBookId(), book.getSellerId())){
            bookService.addBook(book);
            response.put("status", "sucessfull");
            response.put("message", "Book created");
        }
        else {
            Optional<Book> existingBook = bookService.findBook(book.getBookId(), book.getSellerId());
            bookService.updateBook(book, existingBook.get());
//        bookService.addBook(updatedBook);
            response.put("status", "Successfull");
            response.put("message", "Book updated successfully");
        }
        return ResponseEntity.ok(response);

    }


    @DeleteMapping("/home/sell/delete")
    public ResponseEntity<Map<String,String>> deleteBook(@RequestBody Map<String ,String> req){

        Map<String, String> response = new HashMap<>();
        int bookId=Integer.parseInt(req.get("bookId"));
        String sellerId=req.get("sellerId");
        bookService.deleteBook(bookId,sellerId);
        response.put("status", "sucessfull");
        response.put("message", "Book deleted");

        return ResponseEntity.ok(response);

    }

//    @PostMapping("/home/buy")
//    @CrossOrigin(origins = "http://localhost:4200")
//    public ResponseEntity<Map<String,String>> buyBook(@RequestBody Object obj){
//
//    }


}