const User = require('../models/User')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// @route    POST api/auth/login
// @desc     Auth user(student, tutor, admin) and get token
// @access   Public
exports.loginUser = async (req, res) => {
    // Check for errors
    const errors = validationResult(req)
    if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array()})
    // else destructure request body
    const { email, password } = req.body
    try {
        // initialize user
        let user = await User.findOne({email})
        if (!user) return res.status(400).json({ statusCode: 400, message: "Invalid credentials" })

    } catch(error) {
        // h
    }
}