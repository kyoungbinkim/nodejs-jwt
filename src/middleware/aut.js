import jwt from '../module/jwt.js'

export const authmiddleware = async (req, res, next) => {
    const token = req.headers['access-token'] || req.query.token

    if(!token) {
        return res.send('loin first');
    }
    const user = jwt.verify(token);
    if(user == -1){
        return res.send('invalid token');
    }
    
    next();
} 