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
@Table(name="Orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orderId;
    Integer bookId;
    String buyerId;
//    String name;
    String sellerId;

    public Order(Integer bookId, String buyerId, String sellerId) {
        this.bookId = bookId;
        this.buyerId = buyerId;
        this.sellerId = sellerId;
    }
}
