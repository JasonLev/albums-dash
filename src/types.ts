export type FetchedAlbum = {
  id: number;
  title: string;
};
export type Album = FetchedAlbum & {
  genre: string;
  songCount: number;
};

export type AlbumDataByGenre = {
  genre: string;
  totalSongCount: number;
  albumsCount: number;
  avgSongCount: number;
};
