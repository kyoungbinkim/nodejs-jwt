import jwt from "jsonwebtoken";
import config from "../config.js";

export function sign(payload) {
    let ret;
    try {
        ret = jwt.sign(payload, config.secret_key);
    } catch (error) {
        console.log(error);
        return -1;
    }
    return ret;
}

export function verify(token) {
    let decoded;
    try {
        decoded = jwt.verify(token, config.secret_key);
    } catch (error) {
        console.log(error.message);
        return -1;
    }
    return decoded;
}

export default {
    sign,
    verify
}