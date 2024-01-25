package com.bookManagement.Backend.service;

import com.bookManagement.Backend.model.Book;
import com.bookManagement.Backend.model.BookId;
import com.bookManagement.Backend.repository.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepo bookRepo;
     public Book addBook(Book book){
            return bookRepo.save(book);
     }
//     public boolean isExists(Integer id){
//         if(bookRepo.existsById(id))
//             return true;
//         return false;
//     }
     public boolean doesExists(Integer bookId,String sellerId){
         if(bookRepo.findBook(bookId,sellerId))
             return true;
         return false;
     }


     public Optional<Book> findBook(Integer bookId,String sellerId){
         BookId bookobj=new BookId();
         bookobj.setBookId(bookId);
         bookobj.setSellerId(sellerId);
         return bookRepo.findById(bookobj);
     }

     public List<Book> getAllBooks(){
         return bookRepo.findAll();
     }


}

