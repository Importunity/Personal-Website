const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');



 /**
 * @Post Post Users api/auth
 * @description authenticate users
 * @access public
 */
router.post('/', (request, response) => {
    const {name, email, password } = request.body;
    
    // validation
    if(!name || !email || !password){
        return response.status(400).json({msg: 'Please Fill In The Fields'});
    }

    User.findOne({email})
        .then(user => {
            // check if user exists, user is a boolean
            if(user) return response.status(400).json({msg: 'This user already exists'})

            // creates a new user
            const newUser = new User({
                name, 
                email,
                password
            });

            // create salt
            bcrypt.genSalt(10, (err, salt) => {
                // generates a hash for the user's password
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err){
                        throw err;
                    }
                    // the new user's password is now the hash
                    newUser.password = hash;
                    // saves the new user
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                {id: user.id},
                                // environment jwt secret
                                process.env.JWT_SECRET,
                                (err, token) =>{
                                    // if there's an error then throw it
                                    if(err){
                                        throw err;
                                    }
                                    response.json({
                                        user: {
                                            // sends a token
                                            token, 
                                            id: user.id,
                                            name: user.name, 
                                            email: user.email
                                        }
                                    })
                                }
                                
                            )
                            
                        })
                        
                })
            })
        });
})

 module.exports = router;