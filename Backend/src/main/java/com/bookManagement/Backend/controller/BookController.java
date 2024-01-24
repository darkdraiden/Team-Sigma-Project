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

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
//@RequestMapping("/home")
public class BookController {
    @Autowired
    private BookService bookService;
//    @PostMapping("/create-book")
//    public ResponseEntity<String> createBook(@RequestBody BookRequest bookRequest){
//        Integer bookId=bookRequest.getBookId();
//        Integer sellerId=bookRequest.getSellerId();
//        if(bookService.doesExists(bookId,sellerId)){
//            return  ResponseEntity.status(HttpStatus.CONFLICT).body("Book Already exists");
//        }
//        else{
//            Book book =new Book();
//            BookId bookIdObj=new BookId();
//            bookIdObj.setBookId(bookId);
//            bookIdObj.setSellerId(sellerId);
//            book.setBookId(bookIdObj);
//            bookService.addBook(book);
//            return ResponseEntity.ok("Book created");
//        }
//    }
//@PostMapping("/create-book")
//@CrossOrigin(origins = "http://localhost:4200")
//public ResponseEntity<String> createBook(@RequestBody Book book){
//    System.out.println("client");
//    Integer bookId=book.getBookId();
//    Integer sellerId=book.getSellerId();
//    if(bookService.doesExists(bookId, sellerId)){
//        Optional<Book> book1=bookService.findBook(bookId,sellerId);
//        book.setQuantity(book1.get().getQuantity()+1);
////        return  ResponseEntity.status(HttpStatus.CONFLICT).body("Book Already exists");
//    }
//
////        Book book =new Book();
////        BookId bookIdObj=new BookId();
////        bookIdObj.setBookId(bookId);
////        bookIdObj.setSellerId(sellerId);
////        book.setBookId(bookIdObj);
//        bookService.addBook(book);
//        return ResponseEntity.ok("Book created");
//
//}
@PostMapping("home/create-book")
@CrossOrigin(origins = "http://localhost:4200")
public ResponseEntity<Map<String, String>> createBook(@RequestBody Book book){
    System.out.println("client");
    Integer bookId = book.getBookId();
    Integer sellerId = book.getSellerId();
    Map<String, String> response = new HashMap<>();

    if(bookService.doesExists(bookId, sellerId)){
        Optional<Book> existingBook = bookService.findBook(bookId, sellerId);
        book.setQuantity(existingBook.get().getQuantity() + 1);
//        response.put("status", "Book already exists");
        response.put("message", "Quantity updated");
    } else {
        bookService.addBook(book);
        response.put("status", "Book created");
//        response.put("message", "Book added successfully");
    }

    return ResponseEntity.ok(response);
}



    //list of books
    @GetMapping("/books")
    public List<Book> showBooks(){
            return bookService.getAllBooks();
    }

}
