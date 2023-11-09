import { Album } from "./types";

export const dedupedGenres = (albums: Album[]) => {
  return albums.reduce((acc: string[], curr) => {
    if (acc.indexOf(curr.genre) < 0) {
      acc.push(curr.genre);
    }
    return acc;
  }, []);
};
