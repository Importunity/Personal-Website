const express = require('express');
const router = express.Router();
const bcrypt =  require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const { request, response } = require('express');

/**
 * @Post Post Users api/auth
 * @description authentication users
 * @access public
 */
router.post('/', (request, response) =>{
    // request the name, email, and password from the body
    const {name, email, password} = request.body;

    // validation
    if(!name || !email || !password){

    }
}