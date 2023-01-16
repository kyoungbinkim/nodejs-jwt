import { keyGen } from "../module/key.js";
import jwt from 'jsonwebtoken';

describe('test', () => {
    it('keyGen test', () => {
        console.log('keyGen : ', keyGen());
    })

    it('jwt test', async () => {
        const secretKey = keyGen();

        // defalut HS256
        const signature = await jwt.sign(
            {
                name : 'kim',
                age  : '28',
                city : 'seoul'
            },
            secretKey,
        )
        console.log(signature)
        console.log('verify : ', (await jwt.verify(signature, secretKey)));
    })
})