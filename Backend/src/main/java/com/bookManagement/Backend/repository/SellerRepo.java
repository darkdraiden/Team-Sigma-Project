package com.bookManagement.Backend.repository;

import com.bookManagement.Backend.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepo extends JpaRepository<Seller,String> {

}
