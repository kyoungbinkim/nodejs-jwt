import { getUserListQuery } from "../module/db.js";

export function getUserList(req, res) {
    getUserListQuery( usrs => {
        res.send(usrs);
    })
}