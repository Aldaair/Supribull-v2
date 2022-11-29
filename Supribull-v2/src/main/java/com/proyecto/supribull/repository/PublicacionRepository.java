package com.proyecto.supribull.repository;

import com.proyecto.supribull.entities.Publicacion;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PublicacionRepository extends CrudRepository<Publicacion,Integer> {

    List<Publicacion> findByIdPublicacion(int id);

    List<Publicacion> findByIdUsuario(int id);
}
