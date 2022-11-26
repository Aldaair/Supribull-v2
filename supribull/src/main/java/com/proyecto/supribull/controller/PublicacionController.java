package com.proyecto.supribull.controller;


import com.proyecto.supribull.entities.Publicacion;
import com.proyecto.supribull.repository.PublicacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PublicacionController {

    @Autowired
    private PublicacionRepository publicacionRepository;



    @RequestMapping("/publicaciones/{id}")
    public List<Publicacion> getPublicacion(@PathVariable int id){
        return publicacionRepository.findByIdUsuario(id);
    }

    @PostMapping("/publicar")
    Publicacion create(@RequestBody Publicacion newPublicacion){
        Publicacion publicacion = new Publicacion();

        publicacion.setTitulo(newPublicacion.getTitulo());
        publicacion.setDescripcion(newPublicacion.getDescripcion());
        publicacion.setIdUsuario(newPublicacion.getIdUsuario());
        return publicacionRepository.save(publicacion);
    }

    @GetMapping("/all")
    public Iterable<Publicacion> getAll(){
        return publicacionRepository.findAll();
    }
}
