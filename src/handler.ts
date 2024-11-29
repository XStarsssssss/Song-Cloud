import { Request, Response } from 'express';

export const homepageGetHandler = (_: Request, res: Response) => {
    res.render('index');
};
export const lobbypageGetHandler = (_: Request, res: Response) => {
    res.render('lobby');
};
export const favpageGetHandler = (_: Request, res: Response) => {
    res.render('fav');
};

