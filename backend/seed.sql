DROP DATABASE IF EXISTS movieapp;
CREATE DATABASE movieapp;

\c movieapp;

CREATE TABLE movies
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(210) NOT NULL,
    genre_id INT NOT NULL,
    img_url VARCHAR,
    release_year VARCHAR,
    CONSTRAINT genre_id_fkey 
    FOREIGN KEY (genre_id) REFERENCES genres(id)
    ON DELETE NO ACTION
)

CREATE TABLE genres
(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
)

CREATE TABLE ratings
(
    id SERIAL PRIMARY KEY,
    stars INT,
    movie_id INT NOT NULL,
    CONSTRAINT movie_id_fkey 
    FOREIGN KEY (movie_id) REFERENCES movies(id)
    ON DELETE NO ACTION
)

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    text VARCHAR(255),
    movie_id INT NOT NULL,
    CONSTRAINT movie_id_fkey 
    FOREIGN KEY (movie_id) REFERENCES movies(id)
    ON DELETE NO ACTION
)