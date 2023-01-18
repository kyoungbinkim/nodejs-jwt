import jwt from '../module/jwt.js'

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

export const authmiddleware = async (req, res, next) => {
    const token = req.headers['access-token'] || req.query.token

    if(!token) {
        return res.send('loin first');
    }
    const user = jwt.verify(token);
    if(user == -1){
        return res.send('err');
    }
    
    if(user == TOKEN_INVALID){
        return res.send('invalid token');
    }
    else if (user == TOKEN_EXPIRED){
        return res.send('expired token');
    }
    
    next();
} 