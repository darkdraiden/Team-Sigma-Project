package com.bookManagement.Backend.model;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name="Book")
@IdClass(BookId.class)
public class Book {
//    @EmbeddedId
//    @AttributeOverrides({
//            @AttributeOverride(name = "bookId", column = @Column(name = "bookId")),
//            @AttributeOverride(name = "sellerId", column = @Column(name = "sellerId"))
//    })
@Id@Column(name = "bookId")
private Integer bookId;
   @Id @Column(name = "sellerId")
    private Integer sellerId;
//    BookId bookId;
    String bookName;
    String bookDescription;
    String genre;
    String author;
    Integer quantity;
    Integer price;
    @Column(name = "image", length = 2000)
    String image;
//    public void setBookId(BookId bookId) {
//        this.bookId = bookId;
//    }
//
//    public BookId getBookId() {
//        return bookId;
//    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getBookDescription() {
        return bookDescription;
    }

    public void setBookDescription(String bookDescription) {
        this.bookDescription = bookDescription;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
