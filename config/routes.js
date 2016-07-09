const express = require('express')
const router = express.Router()

router.get('/posts', (req, res) => {
  res.status(200).json({results: ['post1']})
})

module.exports = router
