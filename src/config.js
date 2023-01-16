import { keyGen } from "./module/key.js"

let config = {
    secret_key : null,
    option : {
        algorithm : "HS256", 
        expiresIn : "30m",  
        // issuer : "issuer" 
    }
}

export function initConfig(){
    config.secret_key = keyGen();
}

export default config