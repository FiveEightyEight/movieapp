const pgp = require('pg-promise')({})
const db = pgp('postgres://localhost/movieapp')

module.exports = {db,}