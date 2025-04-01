package com.lutetia.lutetiawebshop.dao;

import com.lutetia.lutetiawebshop.dto.GenreDTO;
import com.lutetia.lutetiawebshop.models.Genre;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class GenreDAO {

    private GenreRepository genreRepository;

    public GenreDAO(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }

    public Genre getGenreById(long id) {
        return genreRepository.findById(id).orElseThrow(() -> new RuntimeException("Genre not found"));
    }

    public void createGenre(GenreDTO genreDTO) {
        Genre genre = new Genre(genreDTO.name);
        genreRepository.save(genre);
    }

    public void updateGenre(Long id, GenreDTO genreDTO) {
        Optional<Genre> optionalGenre = this.genreRepository.findById(id);
        if (optionalGenre.isPresent()) {
            Genre genre = optionalGenre.get();
            genre.setName(genreDTO.name);
            genreRepository.save(genre);
        } else {
            throw new RuntimeException("Genre not found");
        }
    }

    public void deleteGenre(Long id) {
        Optional<Genre> optionalGenre = this.genreRepository.findById(id);
        if (optionalGenre.isPresent()) {
            this.genreRepository.deleteById(id);
        } else {
            throw new RuntimeException("Genre not found");
        }
    }
}
