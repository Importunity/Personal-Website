const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

/**
 * @Post Post Users api/users
 * @description Create a user
 * @access public
 */
router.post('/', (request, response) => {
    const {email, password } = request.body;
    
    // validation
    if(!email || !password){
        return response.status(400).json({msg: 'Please enter in all the fields'});
    }

    User.findOne({email})
        .then(user => {
            // check if user exists, user is a boolean
            if(!user) {
                // if the user does nto exist then show a msg on json that the user exists
                return response.status(400).json({msg: 'User does not exist'})
            }

            // validating the password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    // if the password does not match then output that the credentials are invalid
                    if(!isMatch){
                        return response.status(400).json({ msg: 'invalid credentials' })
                    }
                    // signing token
                    jwt.sign(
                        // passing id as payload
                        {id: user.id},
                        // environment jwt secret
                        process.env.JWT_SECRET,
                        (err, token) =>{
                            // if there's an error then throw it
                            if(err){
                                throw err;
                            }
                            response.json({
                                token, 
                                user: {
                                    // sends a response with token and user

                                    id: user.id,
                                    name: user.name, 
                                    email: user.email
                                }
                            })
                        }
                        
                    )
                })
        });
});

/**
 * @Get Get api/users
 * @description Get user data
 * @access private
 */
router.get('/user', auth, (request, response) => {
    // finds the user by the id
    User.findById(request.user.id)
        // opts out the password field
        .select('-password')
        // returns the user in json format
        .then(user => response.json(user));
});

module.exports = router;
