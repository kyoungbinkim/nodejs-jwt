import { joinQuery } from "../module/db.js";


export default function (req, res) {
    console.log(req.body);
    joinQuery(req.body['id'], req.body['pw'], (flag) => {
        console.log("joinQ  : ", flag);
        if(flag) {
            res.status(202).send({suc : true})
        }
        else {
            res.status(200).send({suc : false})
        }
    })
}