package com.project1server.project1server;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DummyHomePage {

    @GetMapping("/home")
    public String index(){
        return "Login Successful!";
    }
}
