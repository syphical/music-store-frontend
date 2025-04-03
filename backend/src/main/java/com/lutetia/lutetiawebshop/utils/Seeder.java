package com.lutetia.lutetiawebshop.utils;

import com.lutetia.lutetiawebshop.dao.*;
import com.lutetia.lutetiawebshop.models.*;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class Seeder {
    private ProductRepository productRepository;
    private ArtistRepository artistRepository;
    private GenreRepository genreRepository;
    private CategoryRepository categoryRepository;
    private UserRepository userRepository;

    public Seeder(ProductRepository productRepository, ArtistRepository artistRepository, GenreRepository genreRepository, CategoryRepository categoryRepository, UserRepository userRepository) {
        this.productRepository = productRepository;
        this.artistRepository = artistRepository;
        this.genreRepository = genreRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        this.seedProducts();
        this.seedUser();
    }

    public void seedProducts() {
        Artist gdragon = new Artist("G-DRAGON");
        Artist taylorswift = new Artist("Taylor Swift");
        Artist bigbang = new Artist("BIGBANG");
        Artist aespa = new Artist("aespa");
        Artist tylerTheCreator = new Artist("Tyler, The Creator");
        Artist michaelJackson = new Artist("Michael Jackson");
        Artist eminem = new Artist("Eminem");
        Artist exo = new Artist("EXO");
        Artist jennie = new Artist("JENNIE");
        Artist joostKlein = new Artist("Joost Klein");
        Artist babymetal = new Artist("BABYMETAL");

        Genre kpop = new Genre("K-POP");
        Genre pop = new Genre("POP");
        Genre hiphop = new Genre("HIPHOP");
        Genre rap = new Genre("RAP");
        Genre euroDance = new Genre("EURO DANCE");
        Genre heavyMetal = new Genre("HEAVY METAL");

        Category cd = new Category("CD");
        Category vinyl = new Category("Vinyl");
        Category album = new Category("Album");

        this.artistRepository.save(gdragon);
        this.artistRepository.save(taylorswift);
        this.artistRepository.save(bigbang);
        this.artistRepository.save(aespa);
        this.artistRepository.save(tylerTheCreator);
        this.artistRepository.save(michaelJackson);
        this.artistRepository.save(eminem);
        this.artistRepository.save(exo);
        this.artistRepository.save(jennie);
        this.artistRepository.save(joostKlein);
        this.artistRepository.save(babymetal);

        this.genreRepository.save(kpop);
        this.genreRepository.save(pop);
        this.genreRepository.save(hiphop);
        this.genreRepository.save(rap);
        this.genreRepository.save(euroDance);
        this.genreRepository.save(heavyMetal);

        this.categoryRepository.save(cd);
        this.categoryRepository.save(vinyl);
        this.categoryRepository.save(album);

        Product product1 = new Product("Ubermensch Blue", 29.99, "TRACKLIST:\n" +
          "\n" +
          "    HOME SWEET HOME (feat. TAEYANG & DAESUNG)\n" +
          "    POWER\n" +
          "    TOO BAD\n" +
          "    DRAMA\n" +
          "    IBELONGIIU\n" +
          "    TAKE ME\n" +
          "    보나마나 (BONAMANA)\n" +
          "    GYRO-DROP\n", 60, "25-02-2025", gdragon, kpop, album);
        Product product2 = new Product("Kwon Ji Yong", 34.99, "[Track List]\n" +
          "\n" +
          "DISK(CD) 1.\n" +
          "01. INTRO. 권지용 (Middle Fingers-Up)\n" +
          "02. Act l. 개소리 (BULLSHIT)\n" +
          "03. Act ll. SUPER STAR\n" +
          "04. Act lll. 무제(無題) (Untitled, 2014)\n" +
          "05. OUTRO. 신곡 (Divina Commedia)", 14, "20-06-2017", gdragon, kpop, cd);
        Product product3 = new Product("MADE THE FULL ALBUM", 39.99, "Big Bang's tenth anniversary project comes to an end with the last album of the Made series. Besides the Made singles, such as Bang Bang Bang, Loser, Bae Bae and \"Let's Not Fall in Love,\" the album also features three new tracks, namely the double title numbers FXXK IT and Last Dance, as well as Girlfriend written by G-Dragon, TOP and YG in-house producer Teddy. YG Entertainment. 2017.", 4, "23-12-2016", bigbang, kpop, album);
        Product product4 = new Product("One of a Kind", 42.99, "One Of A Kind van G-Dragon (bigbang), met release datum 5 september 2012, bevat de volgende nummers: \"결국\", \"Missing You\", \"불 붙여봐라\" en meer.Deze versie van One Of A Kind verschijnt als een 3xCD.", 21, "05-09-2012", gdragon, kpop, album);
        Product product5 = new Product("Ubermensch Red", 29.99, "TRACKLIST:\n" +
          "\n" +
          "    HOME SWEET HOME (feat. TAEYANG & DAESUNG)\n" +
          "    POWER\n" +
          "    TOO BAD\n" +
          "    DRAMA\n" +
          "    IBELONGIIU\n" +
          "    TAKE ME\n" +
          "    보나마나 (BONAMANA)\n" +
          "    GYRO-DROP\n", 64, "25-02-2025", gdragon, kpop, album);
        Product product6 = new Product("1989 (Taylor's Version) Rose Garden Pink Edition", 39.89, "1989 (Taylor's Version) Rose Garden Pink Edition Vinyl is het vijfde studioalbum van Taylor Swift. Dit album is opnieuw uitgebracht als Taylor's Version in 2023. Op het album staan onder andere de singles 'Shake It Off' en 'Blank Space' Dit betreft de Rose Garden Pink 2LP van 1989 (Taylor's Version).", 19, "27-10-2023", taylorswift, pop, vinyl);
        Product product7 = new Product("Coup d'Etat", 36.99, "Coup d'Etat is the second studio album by South Korean rapper G-Dragon, member and leader of South Korean boy band Big Bang. The album was initially released on iTunes. The first five tracks of the album were released on September 2, 2013, the next seven tracks were released on September 5, and physical copies were released on September 13. The album contains the single \"MichiGO\" which was released earlier in 2013.", 34, "02-09-2013", gdragon, kpop, album);
        Product product8 = new Product("The 4th Mini Album 'Drama'", 22.95, "\n" +
          "Track List\n" +
          "\n" +
          "1. Drama\n" +
          "2. Trick or Trick\n" +
          "3. Don’t Blink\n" +
          "4. Hot Air Balloon\n" +
          "5. YOLO\n" +
          "6. You\n", 70, "10-11-2023", aespa, kpop, album);
        Product product9 = new Product("IGOR", 36.61, "Igor is the sixth studio album by American rapper and producer Tyler, the Creator, released on May 17, 2019, through Columbia Records.", 21, "17-05-2019", tylerTheCreator, hiphop, vinyl);
        Product product10 = new Product("Thriller", 28.99, "Thriller is the sixth studio album by the American singer and songwriter Michael Jackson, released on November 29, 1982, by Epic Records. It was produced by Quincy Jones, who previously worked with Jackson on his album Off the Wall.", 19, "30-11-1982", michaelJackson, pop, album);
        Product product11 = new Product("The Slim Shady", 9.99, "The Slim Shady is een album van Eminem uit 2004", 4, "02-07-2004", eminem, rap, album);
        Product product12 = new Product("Exodus", 24.99, "Exodus is the second studio album by South Korean boy band Exo. It was released on March 30, 2015, by SM Entertainment and distributed by KT Music. The album was re-released as Love Me Right on June 3.", 8, "30-03-2015", exo, kpop, album);
        Product product13 = new Product("Ruby", 28.50, "Ruby is the debut solo studio album by South Korean singer and rapper Jennie.", 81, "07-03-2025", jennie, pop, cd);
        Product product14 = new Product("Unity", 19.99, "‘'Unity’‘ (formerly known as Gabberpop) is Joost’s 4th studio album following his latest album in 2022 called ’‘Fryslân’‘, the album was released on the 21st of February, 2025.", 40, "21-02-2025", joostKlein, euroDance, album);
        Product product15 = new Product ("Metal Resistance", 41.99, "Metal Resistance is the second studio album by Japanese heavy metal band Babymetal. It was first released on March 29, 2016, in Japan through BMD Fox Records, and on April 1, 2016, worldwide through earMusic, RED Associated Labels, and Sony Music Entertainment.", 4, "29-03-2016", babymetal, heavyMetal, album);

        this.productRepository.save(product1);
        this.productRepository.save(product2);
        this.productRepository.save(product3);
        this.productRepository.save(product4);
        this.productRepository.save(product5);
        this.productRepository.save(product6);
        this.productRepository.save(product7);
        this.productRepository.save(product8);
        this.productRepository.save(product9);
        this.productRepository.save(product10);
        this.productRepository.save(product11);
        this.productRepository.save(product12);
        this.productRepository.save(product13);
        this.productRepository.save(product14);
        this.productRepository.save(product15);

    }

    private void seedUser() {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        CustomUser testUser = new CustomUser(
                "jim@mail.com",
                passwordEncoder.encode("Test123!"),
                "Jim",
                "Wiggers",
                "31623258018",
                "Zernikedreef",
                "11",
                "2318CK",
                "Leiden",
                "Zuid-Holland"
        );

        CustomUser customUser = new CustomUser(
                "test@mail.com",
                passwordEncoder.encode("Test123!")
        );

        userRepository.save(customUser);
        userRepository.save(testUser);
    }
}
