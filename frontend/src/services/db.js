import axios from 'axios';
const baseURL = null || 'http://localhost:8880/';

const genreTrim = (string) => {
    const [genre] = string.trim().split(',');
    const gMap = { Action: 1, Adventure: 2, Animation: 3, Biography: 4, Comedy: 5, "Crime": 6, Documentary: 7, Drama: 8, Family: 9, Fantasy: 10, "Film Noir": 11, History: 12, Horror: 13, Music: 14, Musical: 15, Mystery: 16, Romance: 17, "Sci-Fi": 18, Short: 19, Sport: 20, Superhero: 21, Thriller: 22, War: 23, Western: 24, }
    return gMap[genre] ? gMap[genre] : 25;
};

export default {
    allMovies: () => {
        return axios({
            method: 'get',
            url: baseURL + 'movies/all'
        })
    },
    info: (id) => {
        return axios({
            method: 'get',
            url: baseURL + 'movies/info',
            params: {
                m: id,
            },
        })
    },
    genre: (genre) => {
        return axios({
            method: 'get',
            url: baseURL + 'movies/genre',
            params: {
                g: genre,
            },
        })
    },
    movie: (title, gid, img_url, release_year) => {
        const genre_id = genreTrim(gid) || 25;
        return axios({
            method: 'post',
            url: baseURL + 'movies/add',
            data: {
                title,
                genre_id,
                img_url,
                release_year,
            }
        })
    }
};