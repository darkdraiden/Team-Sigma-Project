package com.bookManagement.Backend.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JWTResponse {
    private String token;
    private String username;


//    public String getToken() {
//        return token;
//    }
//
//    public void setToken(String token) {
//        this.token = token;
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//    @Override
//    public String toString() {
//        return "JWTResponse{" +
//                "token='" + token + '\'' +
//                ", username='" + username + '\'' +
//                '}';
//    }
    
}
