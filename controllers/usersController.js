const pool = require('../db')

const getAllUsers = async (req, res) => {
  try {
    const { page, limit } = req.query
    let users
    if (page && limit) {
      const offset = (page - 1) * limit
      users = await pool.query('select * from users limit $1 offset $2', [limit, offset])
    } else if (limit) {
      users = await pool.query('select * from users limit $1', [limit])
    } else {
      users = await pool.query('select * from users')
    }
    res.status(200).json(users.rows)
  } catch (err) {
    console.error(err)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await pool.query('select * from users where id = $1', [id])
    res.status(200).json(user.rows)
  } catch (err) {
    console.error(err)
  }
}

const addUser = async (req, res) => {
  try {
    const { email, gender, password, role } = req.body
    await pool.query('insert into users (email, gender, password, role) values ($1, $2, $3, $4)', [email, gender, password, role])
    res.status(200).json({ message: 'Added Successfully' })
  } catch (err) {
    console.error(err)
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { email, gender, password, role } = req.body
    await pool.query('update users set email = $1, gender = $2, password = $3, role = $4 where id = $5', [email, gender, password, role, id])
    res.status(200).json({ message: 'Updated Successfully' })
  } catch {
    console.error(err)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('delete from movies where id = $1', [id])
    res.status(200).json({ message: 'Deleted Successfully' })
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
}