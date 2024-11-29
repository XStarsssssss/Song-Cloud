import { Router } from 'express';
import { favpageGetHandler, homepageGetHandler, lobbypageGetHandler } from './handler';

const router = Router();

router.get('/', homepageGetHandler);

router.get('/lobby', lobbypageGetHandler);

router.get('/fav', favpageGetHandler);

export default router;
