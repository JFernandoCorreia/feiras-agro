package com.feirasagroecologicas.controllers;

import com.feirasagroecologicas.models.Feira;
import com.feirasagroecologicas.repositories.FeiraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feiras")
public class FeiraController {

    @Autowired
    private FeiraRepository feiraRepository;

    @GetMapping
    public List<Feira> listarFeiras() {
        return feiraRepository.findAll();
    }

    @PostMapping
    public Feira adicionarFeira(@RequestBody Feira feira) {
        return feiraRepository.save(feira);
    }
}
