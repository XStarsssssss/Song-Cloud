import { Router } from 'express';
import { barlolopageGetHandler, bophyupageGetHandler, cherrykotrrpannprrpageGetHandler, cxituulattsaungpageGetHandler, dehtetpopmatatbuupageGetHandler, favpageGetHandler, hantunpageGetHandler, homepageGetHandler, htooeaintinpageGetHandler, khinmaungtoepageGetHandler, kyaltalsonnrtaenightpageGetHandler, legteepageGetHandler, lobbypageGetHandler, lwanpageGetHandler, nayyrrtimemrrdetailpageGetHandler, pancxituupageGetHandler, saipageGetHandler, salaeshirttanpageGetHandler, swaytalpageGetHandler, TabrwayaeyinthwelndelpageGetHandler, tatnaytotcxilrrlatemalpageGetHandler, wintmomepageGetHandler, zawpaingpageGetHandler, zawwinhtutpageGetHandler } from './handler';

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

router.get('/Wint_Mome', wintmomepageGetHandler );

router.get('/Lwan', lwanpageGetHandler );

router.get('/Pan_Cxi_Tuu', pancxituupageGetHandler );

router.get('/Salae_Shirt_Tan', salaeshirttanpageGetHandler);

router.get('/Kyal_Tae_Sonne_Tae_Night', kyaltalsonnrtaenightpageGetHandler);

router.get('/Tat_Nay_Tot_Cxi_Lrr_Late_Mal', tatnaytotcxilrrlatemalpageGetHandler);

router.get('/Tat_Nay_Tot_Cxi_Lrr_Late_Mal', cxituulattsaungpageGetHandler);

router.get('/Cxi_Tuu_Latt_Saung', cxituulattsaungpageGetHandler);

router.get('/Sway_Tal', swaytalpageGetHandler);

router.get('/Bar_Lo_Lo', barlolopageGetHandler);

router.get('/Leg_Tee', legteepageGetHandler);







export default router;
