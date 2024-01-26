package com.bookManagement.Backend.controller;

import com.bookManagement.Backend.model.Seller;
import com.bookManagement.Backend.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class SellerController {
    @Autowired
    SellerService sellerService;

    @PostMapping("home/sell")
    public void createSeller(@RequestBody Map<String,String> req){
        System.out.println("in seller");
        String sellerId=req.get("sellerId");
        if(!sellerService.doesSellerExists(sellerId)){
            Seller seller=new Seller(sellerId,req.get("name"));
            sellerService.createSeller(seller);
        }

    }
}
