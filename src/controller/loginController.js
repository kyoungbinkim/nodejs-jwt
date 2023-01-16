import { loginQuery } from "../module/db.js";
import jwt from '../module/jwt.js'

export function loginController(req, res){
    const id = req.body['id'];
    const pw = req.body['pw'];

    loginQuery(id, pw, (flag) => {
        if(!flag) {
            res.send({'suc' : flag})
        } 
        
        const tk = jwt.sign(req.body);

        console.log(tk, req.body);
        res.send({
            'suc' : flag,
            'token' : tk
        })
    })
}