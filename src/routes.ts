import { Router } from 'express';
import { homepageGetHandler, lobbypageGetHandler } from './handler';

const router = Router();

router.get('/', homepageGetHandler);

router.get('/lobby', lobbypageGetHandler);

export default router;
