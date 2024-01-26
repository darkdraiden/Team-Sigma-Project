package com.bookManagement.Backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@AllArgsConstructor
@Entity
public class Seller {
    @Id
            @Column(name="sellerId")
    String sellerId;
    String name;
}
