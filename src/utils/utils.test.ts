import { Album } from "../types";
import { getAlbumDataByGenre } from "./utils";

test("transform album data for genre stats", () => {
  const mockData: Album[] = [
    { id: 1, title: "", genre: "Rock", songCount: 12 },
    { id: 2, title: "", genre: "Pop", songCount: 10 },
    { id: 3, title: "", genre: "Rock", songCount: 11 },
    { id: 4, title: "", genre: "Jazz", songCount: 5 },
    { id: 5, title: "", genre: "Pop", songCount: 8 },
  ];
  const expected = [
    { genre: "Rock", totalSongCount: 23, albumsCount: 2, avgSongCount: 11.5 },
    { genre: "Pop", totalSongCount: 18, albumsCount: 2, avgSongCount: 9 },
    { genre: "Jazz", totalSongCount: 5, albumsCount: 1, avgSongCount: 5 },
  ];
  const result = getAlbumDataByGenre(mockData);
  expect(result).toEqual(expected);
});
