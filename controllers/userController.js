import users from '../data/users.js'

const getUsers = (req, res, next) => {
  try {
    res.json(users)
  } catch (error) {
    next(error)
  }
}

export { getUsers }
