package com.bookManagement.Backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Embeddable
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class BookId implements Serializable {
    private Integer bookId;
    private String sellerId;



    public BookId(Integer bookId, String sellerId) {
        this.bookId = bookId;
        this.sellerId = sellerId;
    }
}
