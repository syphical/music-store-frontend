package com.lutetia.lutetiawebshop.dao;

import com.lutetia.lutetiawebshop.models.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {
}
