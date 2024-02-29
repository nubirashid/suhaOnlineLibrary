const errorHandler = (err, req, res, next) => {
  // Handle the error
  if (res.headersSent) {
    return next(err)
  }
  res.status(500).json({ error: err.message || 'Internal Server Error' })
}

export default errorHandler
