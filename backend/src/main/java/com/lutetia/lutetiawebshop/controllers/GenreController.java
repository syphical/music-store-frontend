package com.lutetia.lutetiawebshop.controllers;

import com.lutetia.lutetiawebshop.dao.GenreDAO;
import com.lutetia.lutetiawebshop.dto.GenreDTO;
import com.lutetia.lutetiawebshop.models.Genre;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://s1157305.student.inf-hsleiden.nl:17305"})
@RequestMapping("/genres")
public class GenreController {
    private GenreDAO genreDAO;

    public GenreController(GenreDAO genreDAO) {
        this.genreDAO = genreDAO;
    }

    @GetMapping
    public List<Genre> getAllGenres() {
        return genreDAO.getAllGenres();
    }

    @GetMapping("/{id}")
    public ResponseEntity<GenreDTO> getGenreById(@PathVariable long id) {
        Genre genre = genreDAO.getGenreById(id);
        return new ResponseEntity<>(new GenreDTO(genre.getId(), genre.getName()), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> createGenre(@RequestBody GenreDTO genreDTO) {
        this.genreDAO.createGenre(genreDTO);
        return ResponseEntity.ok("Genre created");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateGenre(@PathVariable long id, @RequestBody GenreDTO genreDTO) {
        this.genreDAO.updateGenre(id, genreDTO);
        return ResponseEntity.ok("Genre #" + id + " updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteGenre(@PathVariable long id) {
        this.genreDAO.deleteGenre(id);
        return ResponseEntity.ok("Genre #" + id + " deleted successfully");
    }
}
