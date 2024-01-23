package com.bookManagement.Backend.model;

import lombok.*;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JWTRequest {
   private String username;
   private String password;

}
