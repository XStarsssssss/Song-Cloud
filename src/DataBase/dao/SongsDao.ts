import { getConnection } from '../dbConnection';
import { Songs } from '../model/Songs';

export const getAllSongs = async (): Promise<Songs[]> => {
    const todos = await (await getConnection()).execute('SELECT * FROM Songs;');
    return todos[0] as Songs[];
};

