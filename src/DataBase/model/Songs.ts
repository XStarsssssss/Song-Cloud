import { RowDataPacket } from 'mysql2';

export interface Songs extends RowDataPacket {
    Id: number;
    Song_Name: string;
    artist: string;
    song_cover_img: string;  
    music_audio: string;     
    lyrics: string;          
}
