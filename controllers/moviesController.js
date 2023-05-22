const pool = require('../db')

const getAllMovies = async (req, res) => {
  try {
    const { page, limit } = req.query
    let movies
    if (page && limit) {
      const offset = (page - 1) * limit
      movies = await pool.query('select * from movies limit $1 offset $2', [limit, offset])
    } else if (limit) {
      movies = await pool.query('select * from movies limit $1', [limit])
    } else {
      movies = await pool.query('select * from movies')
    }
    res.status(200).json(movies.rows)
  } catch (err) {
    console.error(err)
  }
}

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await pool.query('select * from movies where id = $1', [id])
    res.status(200).json(movie.rows)
  } catch (err) {
    console.error(err)
  }
}

const addMovie = async (req, res) => {
  try {
    const { title, genres, year } = req.body
    await pool.query('insert into movies (title, genres, year) values ($1, $2, $3)', [title, genres, year])
    res.status(200).json({ message: 'Added Successfully' })
  } catch (err) {
    console.error(err)
  }
}

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params
    const { title, genres, year } = req.body
    await pool.query('update movies set title = $1, genres = $2, year = $3 where id = $4', [title, genres, year, id])
    res.status(200).json({ message: 'Updated Successfully' })
  } catch {
    console.error(err)
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('delete from movies where id = $1', [id])
    res.status(200).json({ message: 'Deleted Successfully' })
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie
}