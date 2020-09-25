// if you want a private route

const jwt = require('jsonwebtoken');

// takes in a request, a response, and the next as when you're done with w.e the middle ware does we can go next
// function is for retrieving the token from the frontend 
function auth(request, response, next){
    // header of the token
    const token = request.header('x-auth-token');
    //console.log(`token is: ${token}`);
    // check for token
    if(!token){
        // 401 is used for unauthorized 
        return response.status(401).json({msg: 'no token, so access denied'});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // verify token
        // add user from payload
        request.user = decoded;
        // calls the next piece of middleware
        next();
    }catch(e){
        response.status(400).json({msg: 'invalid token'});
    }

        
}

module.exports = auth;