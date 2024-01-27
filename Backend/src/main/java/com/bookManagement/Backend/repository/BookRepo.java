package com.bookManagement.Backend.repository;

import com.bookManagement.Backend.model.Book;
import com.bookManagement.Backend.model.BookId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface BookRepo extends JpaRepository<Book, BookId> {
//    public Optional<Book> findBook
@Query("SELECT COUNT(b) > 0 FROM Book b WHERE b.bookId = :bookId AND b.sellerId = :sellerId")
    public boolean findBook(Integer bookId,String sellerId);

//    public boolean findBookBy()
}
