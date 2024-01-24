package com.bookManagement.Backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BookRequest {
    private Integer bookId;
    private Integer sellerId;
    private String bookName;
    private String bookDescription;
    private String genre;
    private String author;
    private Integer quantity;
    private Integer price;
}
