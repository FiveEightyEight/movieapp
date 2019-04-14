const {
    db,
} = require('./db');


const allMovies = () => {
    return db.any(`SELECT * FROM movies `);
};

const allInfo = (id) => {
    return db.any(`SELECT * FROM ratings
    JOIN comments 
    ON ratings.movie_id = comments.movie_id
    WHERE ratings.movie_id = $[id];`, {
            id,
        })
};

const byGenre = (genre) => {
    return db.any(`SELECT * FROM movies
    JOIN genres
    ON movies.genre_id = genres.id
    WHERE movies.genre_id = $[genre];`, {
            genre,
        });
};

const addRating = (stars, movie_id) => {
    return db.none(`INSERT INTO ratings (stars, movie_id)
    VALUES ($[stars], $[movie_id]);`, {
        stars,
        movie_id,
    });
};

const addComment = (text, movie_id) => {
    return db.none(`INSERT INTO comments (text, movie_id)
    VALUES ($[text], $[movie_id]);`, {
        text,
        movie_id,
    });
};

module.exports = {
    allMovies,
    allInfo,
    byGenre,
    addRating,
    addComment,
};