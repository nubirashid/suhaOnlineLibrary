const authRequired = (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const encoded = req.headers.authorization.split(' ')[1]
      // decode it using base64
      const decoded = Buffer.from(encoded, 'base64').toString()
      const username = decoded.split(':')[0]
      const password = decoded.split(':')[1]
      //   Using static username and password
      if (
        username === process.env.DUMMY_USER_NAME &&
        password === process.env.DUMMY_PASSWORD
      ) {
        next()
      } else {
        res
          .status(403)
          .send(
            'Invalid authorization data provided. Please check username and password'
          )
      }
    } catch (error) {
      throw new Error('Not authorized, token failed')
    }
  } else {
    res.status(401)
    throw new Error('Access Denied: Please provide Authorization header')
  }
}

export default authRequired
