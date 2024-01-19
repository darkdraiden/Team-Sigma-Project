package com.bookManagement.Backend.service;

import com.bookManagement.Backend.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private List<User> userList=new ArrayList<>();
     public UserService(){
         userList.add(new User("kunalpratap","lhaDAHDA","KAHDHHAKD"));
     }
    public void addUser(User user){
        if(!userList.contains(user))
            userList.add(user);
        userList.add(new User("kunalpratap","lhaDAHDA","KAHDHHAKD"));
    }

    public List<User> getUserList(){
        return this.userList;
    }
}
