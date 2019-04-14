const MovieServices = require('../services/Movies');
const MovieRouter = require('express').Router();

MovieRouter.get('/all', (req, res) => {
    MovieServices.allMovies()
        .then(data => {
            res.status(200)
                .json(data);
        },
            err => {
                res.status(400)
                    .json({ err, });
            }
        )
        .catch(err => {
            res.status(400)
                .json({ message: 'error retrieving movies' });
        })
});

MovieRouter.get('/info', (req, res) => {
    const { m } = req.query;
    MovieServices.allInfo(m)
        .then(data => {
            res.status(200)
                .json(data);
        },
            err => {
                res.status(400)
                    .json({ err, });
            }
        )
        .catch(err => {
            res.status(400)
                .json({ message: 'error retrieving info' });
        });
});

MovieRouter.get('/genre', (req, res) => {
    const { g } = req.query;
    MovieServices.byGenre(g)
        .then(data => {
            res.status(200)
                .json(data);
        },
            err => {
                res.status(400)
                    .json({ err, });
            }
        )
        .catch(err => {
            res.status(400)
                .json({ message: 'error retrieving genre' });
        });
});

MovieRouter.post('/rating', (req, res) => {
    const { stars, movie_id } = req.params;
    MovieServices.addRating(stars, movie_id)
    .then(data => {
        res.status(200)
            .json({message: `rating successfully added for ${movie_id}`});
    },
        err => {
            res.status(400)
                .json({ err, });
        }
    )
    .catch(err => {
        res.status(400)
            .json({ message: `error creating rating for ${movie_id}` });
    });
});

MovieRouter.post('/comment', (req, res) => {
    const { text, movie_id } = req.params;
    MovieServices.addComment(text, movie_id)
    .then(data => {
        res.status(200)
            .json({message: `comment successfully added for ${movie_id}`});
    },
        err => {
            res.status(400)
                .json({ err, });
        }
    )
    .catch(err => {
        res.status(400)
            .json({ message: `error creating comment for ${movie_id}` });
    });
});

module.exports = {MovieRouter,};