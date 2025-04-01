package com.lutetia.lutetiawebshop.controllers;

import com.lutetia.lutetiawebshop.dao.ArtistDAO;
import com.lutetia.lutetiawebshop.dto.ArtistDTO;
import com.lutetia.lutetiawebshop.models.Artist;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://s1157305.student.inf-hsleiden.nl:17305"})
@RequestMapping("/artists")
public class ArtistController {
    private ArtistDAO artistDAO;

    public ArtistController(ArtistDAO artistDAO) {
        this.artistDAO = artistDAO;
    }

    @GetMapping
    public List<Artist> getAllArtists() {
        return artistDAO.getAllArtists();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArtistDTO> getArtistById(@PathVariable long id) {
        Artist artist = artistDAO.getArtistById(id);
        return new ResponseEntity<>(new ArtistDTO(artist.getId(), artist.getName()), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> createArtist(@RequestBody ArtistDTO artistDTO) {
        this.artistDAO.createArtist(artistDTO);
        return ResponseEntity.ok("Artist created");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateArtist(@PathVariable long id, @RequestBody ArtistDTO artistDTO) {
        this.artistDAO.updateArtist(id, artistDTO);
        return ResponseEntity.ok("Artist #" + id + " updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteArtist(@PathVariable long id) {
        this.artistDAO.deleteArtist(id);
        return ResponseEntity.ok("Artist #" + id + " deleted successfully");
    }
}
