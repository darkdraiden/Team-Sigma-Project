package com.bookManagement.Backend.controller;

import com.bookManagement.Backend.model.JWTRequest;
import com.bookManagement.Backend.model.JWTResponse;
import com.bookManagement.Backend.model.User;
import com.bookManagement.Backend.repository.UserRepo;
import com.bookManagement.Backend.security.JWTHelper;
import com.bookManagement.Backend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager manager;
@Autowired
 private UserService userService;
@Autowired
private UserRepo userRepo;
    @Autowired
    private JWTHelper helper;
    private Logger logger = LoggerFactory.getLogger(AuthController.class);


    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<JWTResponse> login(@RequestBody JWTRequest request) {
        System.out.println("here");

        this.doAuthenticate(request.getUsername(), request.getPassword());
        System.out.println("here12");

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        String token = this.helper.generateToken(userDetails);
         System.out.println(token);

        JWTResponse response = JWTResponse.builder()
                .token(token)
                .username(userDetails.getUsername()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) {
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);

        //edited part



        System.out.println(authentication.toString());
        try {
            manager.authenticate(authentication);
            System.out.println("error");

        }
//         catch (BadCredentialsException e) {
//            throw new BadCredentialsException(" Invalid Username or Password  !!");
//        }
            catch (BadCredentialsException e) {
                // If credentials are invalid, return an error response with HTTP status code 401 (Unauthorized)
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid Username or Password", e);
            }

    }

//    @ExceptionHandler(BadCredentialsException.class)
//    public String exceptionHandler() {
//        return "Credentials Invalid !!";
//    }

    //edited
//    @ExceptionHandler(BadCredentialsException.class)
//    public HttpStatus exceptionHandler() {
//        return HttpStatus.NOT_FOUND;
//    }

    @PostMapping("/create-user")
    @CrossOrigin(origins = "http://localhost:4200")
    public User createUser(@RequestBody User user){
        System.out.println("client ");
        return userService.addUser(user);
    }



}