import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import rootRouter from './router/index.js';


export default async () => {
    const app = express()
    const port = process.env.port || '20232'
    
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json()); // post 요청시 JSON parse

    app.use('/', rootRouter);   // 서버가 실행되기 전에 set 라우터 지정

    app.use(morgan('dev'));

    app.set('port', port);
    app.listen(port);
}
 