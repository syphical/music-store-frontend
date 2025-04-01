package com.lutetia.lutetiawebshop.dao;

import com.lutetia.lutetiawebshop.dto.ArtistDTO;
import com.lutetia.lutetiawebshop.dto.CategoryDTO;
import com.lutetia.lutetiawebshop.models.Artist;
import com.lutetia.lutetiawebshop.models.Category;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ArtistDAO {

    private ArtistRepository artistRepository;

    public ArtistDAO(ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    public List<Artist> getAllArtists() {
        return artistRepository.findAll();
    }

    public Artist getArtistById(long id) {
        return artistRepository.findById(id).orElseThrow(() -> new RuntimeException("Artist not found"));
    }

    public void createArtist(ArtistDTO artistDTO) {
        Artist artist = new Artist(artistDTO.name);
        artistRepository.save(artist);
    }

    public void updateArtist(Long id, ArtistDTO artistDTO) {
        Optional<Artist> optionalArtist = this.artistRepository.findById(id);
        if (optionalArtist.isPresent()) {
            Artist artist = optionalArtist.get();
            artist.setName(artistDTO.name);
            artistRepository.save(artist);
        } else {
            throw new RuntimeException("Artist not found");
        }
    }

    public void deleteArtist(Long id) {
        Optional<Artist> optionalArtist = this.artistRepository.findById(id);
        if (optionalArtist.isPresent()) {
            this.artistRepository.deleteById(id);
        } else {
            throw new RuntimeException("Artist not found");
        }
    }
}
