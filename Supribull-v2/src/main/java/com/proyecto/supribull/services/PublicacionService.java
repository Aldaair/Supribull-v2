package com.proyecto.supribull.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.supribull.entities.Publicacion;
import com.proyecto.supribull.entities.PublicacionModel;
import com.proyecto.supribull.repository.PublicacionRepository;

@Service
public class PublicacionService {
	@Autowired
	PublicacionRepository publicacionRepository;
	
	public Iterable<Publicacion> getAll(){
    	return publicacionRepository.findAll();
    }
	
}
