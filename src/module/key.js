import crypto from 'crypto';

export function keyGen(){
    return crypto.randomBytes(32).toString('hex');
}