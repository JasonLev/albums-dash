export type FetchedAlbum = {
  id: number;
  title: string;
};
export type Album = FetchedAlbum & {
  genre: string;
  songCount: number;
};
