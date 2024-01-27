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


    public void updateBook(Book book,Book existing){
        if(book.getBookName()!="") {
            String bookName = book.getBookName();
            existing.setBookName(bookName);
        }
        if(book.getBookDescription()!="") {
            String bookDesc = book.getBookDescription();
            existing.setBookDescription(bookDesc);
        }
        if(book.getGenre()!="") {
            String genre = book.getGenre();
            existing.setGenre(genre);
        }
        if(book.getAuthor()!="") {
            String author = book.getAuthor();
            existing.setAuthor(author);
        }
        if(book.getImage()!="") {
            String image = book.getImage();
            existing.setImage(image);
        }
        if(book.getPrice()!=null) {
            int price = book.getPrice();
            existing.setPrice(price);
        }
        if(book.getQuantity()!=null) {
            int quantity = book.getQuantity();
            existing.setQuantity(quantity);
        }
        bookRepo.save(existing);
//         return book;
    }


    public void deleteBook(int bookId,String sellerId){
        BookId bookId1=new BookId(bookId,sellerId);
        bookRepo.deleteById(bookId1);
    }

}