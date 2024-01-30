package com.bookManagement.Backend.model;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

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
    Date date;

    public Order(Integer bookId, String buyerId, String sellerId,Date date) {
        this.bookId = bookId;
        this.buyerId = buyerId;
        this.sellerId = sellerId;
        this.date=date;
    }
}
