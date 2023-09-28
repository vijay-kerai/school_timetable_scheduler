import express, { Request, Response } from 'express';
import config from './config';
import globalError from './utils/errorHandler';
import appError from './utils/appError';
import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express.js with TypeScript!');
});

app.all('*', (req: Request, res: Response) => {
    throw new appError ( 404, `Page not found. Can't find ${req.originalUrl} on this server`);
});

app.use(globalError);

app.listen(config.app.port, () => console.log(`Server is running on http://localhost:${config.app.port}`));