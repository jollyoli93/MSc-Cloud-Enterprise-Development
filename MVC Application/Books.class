package models;

import jakarta.xml.bind.annotation.XmlRootElement;

/**
 * Represents a Book object with various descriptive fields.
 * This class is annotated with JAXB for XML serialization.
 */
@XmlRootElement(name = "book")
public class Book {

    private int id;
    private String title;
    private String author;
    private String date;
    private String genres;
    private String characters;
    private String synopsis;

    /**
     * Constructs a Book object without an ID.
     *
     * @param title       the title of the book
     * @param author      the author of the book
     * @param date        the publication date
     * @param genres      the genres of the book
     * @param characters  the main characters in the book
     * @param synopsis    a brief summary of the book
     */
    public Book(String title, String author, String date, String genres, String characters, String synopsis) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.genres = genres;
        this.characters = characters;
        this.synopsis = synopsis;
    }

    /**
     * Constructs a Book object with an ID.
     *
     * @param id          the unique identifier of the book
     * @param title       the title of the book
     * @param author      the author of the book
     * @param date        the publication date
     * @param genres      the genres of the book
     * @param characters  the main characters in the book
     * @param synopsis    a brief summary of the book
     */
    public Book(int id, String title, String author, String date, String genres, String characters, String synopsis) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.date = date;
        this.genres = genres;
        this.characters = characters;
        this.synopsis = synopsis;
    }

    /**
     * Default no-argument constructor for JAXB and general use.
     */
    public Book() {}

    /** @return the unique identifier of the book */
    public int getId() {
        return id;
    }

    /** @param id the unique identifier to set */
    public void setId(int id) {
        this.id = id;
    }

    /** @return the title of the book */
    public String getTitle() {
        return title;
    }

    /** @param title the title to set */
    public void setTitle(String title) {
        this.title = title;
    }

    /** @return the author of the book */
    public String getAuthor() {
        return author;
    }

    /** @param author the author to set */
    public void setAuthor(String author) {
        this.author = author;
    }

    /** @return the publication date */
    public String getDate() {
        return date;
    }

    /** @param date the publication date to set */
    public void setDate(String date) {
        this.date = date;
    }

    /** @return the genres of the book */
    public String getGenres() {
        return genres;
    }

    /** @param genres the genres to set */
    public void setGenres(String genres) {
        this.genres = genres;
    }

    /** @return the main characters in the book */
    public String getCharacters() {
        return characters;
    }

    /** @param characters the characters to set */
    public void setCharacters(String characters) {
        this.characters = characters;
    }

    /** @return the synopsis of the book */
    public String getSynopsis() {
        return synopsis;
    }

    /** @param synopsis the synopsis to set */
    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    /**
     * Returns a custom string representation of the Book.
     *
     * @return a string containing all book fields delimited by $
     */
    @Override
    public String toString() {
        return "Book[id=" + id + "$title=" + title + "$author=" + author + "$date=" + date + "$genres=" + genres
                + "$synopsis=" + synopsis + "$characters=" + characters + "]";
    }
}
