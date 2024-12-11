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
export const saipageGetHandler = (_: Request, res: Response) => {
    res.render('Sai_Htee_Saing');
};
export const khinmaungtoepageGetHandler = (_: Request, res: Response) => {
    res.render('Khin_Maung_Toe');
};
export const htooeaintinpageGetHandler = (_: Request, res: Response) => {
    res.render('Htoo_Eaint_Tin');
};
export const bophyupageGetHandler = (_: Request, res: Response) => {
    res.render('Bo_Phyu');
};
export const hantunpageGetHandler = (_: Request, res: Response) => {
    res.render('Han_Tun');
};
export const zawwinhtutpageGetHandler = (_: Request, res: Response) => {
    res.render('Zaw_Win_Htut');
};
export const zawpaingpageGetHandler = (_: Request, res: Response) => {
    res.render('Zaw_Paing');
};
export const nayyrrtimemrrdetailpageGetHandler = (_: Request, res: Response) => {
    res.render('nay_yrr_time_mrr_detail');
}
export const cherrykotrrpannprrpageGetHandler = (_: Request, res: Response) => {
    res.render('cherry_ko_tr_pan_prr_detail');
}
export const dehtetpopmatatbuupageGetHandler = (_: Request, res: Response) => {
    res.render('de_htet_po_p_ma_tat_naing_buu_detail');
}
export const TabrwayaeyinthwelndelpageGetHandler = (_: Request, res: Response) => {
    res.render('Tabawa_Yae_Yin_Twale_Ngel_detail');
}
export const wintmomepageGetHandler = (_: Request, res: Response) => {
    res.render('Wint_mome_detail');
}
export const lwanpageGetHandler = (_: Request, res: Response) => {
    res.render('Lwan_detail');
}
export const pancxituupageGetHandler = (_: Request, res: Response) => {
    res.render('Pan_Cxi_Tuu_detail');
}
export const salaeshirttanpageGetHandler = (_: Request, res: Response) => {
    res.render('Sale_Shirt_Tan_detail');
}


