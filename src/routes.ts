import { Router } from 'express';
import { bophyupageGetHandler, cherrykotrrpannprrpageGetHandler, dehtetpopmatatbuupageGetHandler, favpageGetHandler, hantunpageGetHandler, homepageGetHandler, htooeaintinpageGetHandler, khinmaungtoepageGetHandler, lobbypageGetHandler, nayyrrtimemrrdetailpageGetHandler, saipageGetHandler, TabrwayaeyinthwelndelpageGetHandler, zawpaingpageGetHandler, zawwinhtutpageGetHandler } from './handler';

const router = Router();

router.get('/', homepageGetHandler);

router.get('/lobby', lobbypageGetHandler);

router.get('/fav', favpageGetHandler);

router.get('/Sai_Htee_Saing', saipageGetHandler);

router.get('/Khin_Maung_Toe', khinmaungtoepageGetHandler);

router.get('/Htoo_Eaint_Tin', htooeaintinpageGetHandler);

router.get('/Bo_Phyu', bophyupageGetHandler);

router.get('/Han_Tun', hantunpageGetHandler );

router.get('/Zaw_Win_Htut', zawwinhtutpageGetHandler );

router.get('/Zaw_Paing', zawpaingpageGetHandler );

router.get('/Nay_Yrr_Time_Mrr_Detail', nayyrrtimemrrdetailpageGetHandler );

router.get('/Cherry_Ko_Tar_Pann_Prr_Detail', cherrykotrrpannprrpageGetHandler );

router.get('/De_Htet_Po_P_Ma_Tat_Naing_Buu_Detail', dehtetpopmatatbuupageGetHandler );

router.get('/Tabrwa_Yae_Yin_Twhel_Ngel', TabrwayaeyinthwelndelpageGetHandler );




export default router;
