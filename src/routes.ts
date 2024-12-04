import { Router } from 'express';
import { favpageGetHandler, homepageGetHandler, lobbypageGetHandler, saipageGetHandler } from './handler';

const router = Router();

router.get('/', homepageGetHandler);

router.get('/lobby', lobbypageGetHandler);

router.get('/fav', favpageGetHandler);

router.get('/Sai_Htee_Saing', saipageGetHandler);

export default router;
