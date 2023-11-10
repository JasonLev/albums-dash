import { Album, AlbumDataByGenre } from "./types";

export const dedupedGenres = (albums: Album[]) => {
  return albums.reduce((acc: string[], curr) => {
    if (acc.indexOf(curr.genre) < 0) {
      acc.push(curr.genre);
    }
    return acc;
  }, []);
};

export const getFilteredAlbums = (filteredGenres: string[], albums: Album[]) =>
  filteredGenres.length
    ? albums.filter((album) => filteredGenres.includes(album.genre))
    : albums;

export const getAlbumDataByGenre = (filteredAlbums: Album[]) => {
  return filteredAlbums.reduce((acc: AlbumDataByGenre[], album) => {
    const genre = album.genre;
    const index = acc.findIndex((g) => g.genre === genre);
    if (index !== -1) {
      acc[index].totalSongCount += album.songCount;
      acc[index].albumsCount++;
      acc[index].avgSongCount =
        acc[index].totalSongCount / acc[index].albumsCount;
    } else {
      acc.push({
        genre,
        totalSongCount: album.songCount,
        albumsCount: 1,
        avgSongCount: album.songCount,
      });
    }

    return acc;
  }, []);
};
