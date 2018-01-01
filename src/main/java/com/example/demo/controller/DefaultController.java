package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Devon Ravihansa on 1/1/2018.
 */
@Controller
public class DefaultController {

    @RequestMapping({"/", "/index"})
    public String index(){
        return "index";
    }
}
