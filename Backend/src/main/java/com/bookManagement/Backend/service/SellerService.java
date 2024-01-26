package com.bookManagement.Backend.service;

import com.bookManagement.Backend.model.Seller;
import com.bookManagement.Backend.repository.SellerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerService {
    @Autowired
    SellerRepo sellerRepo;
    public boolean doesSellerExists(String sellerId){
        return sellerRepo.existsById(sellerId);
    }

    public void createSeller(Seller seller){
        sellerRepo.save(seller);
    }
}
