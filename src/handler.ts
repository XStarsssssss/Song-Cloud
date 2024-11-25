import { Request, Response } from 'express';

export const homepageGetHandler = (_: Request, res: Response) => {
    res.render('index');
};
export const lobbypageGetHandler = (_: Request, res: Response) => {
    res.render('lobby');
};
