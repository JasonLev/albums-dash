import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

type FetchedAlbum = {
  id: number;
  title: string;
};
type Album = FetchedAlbum & {
  genre: string;
  songCount: number;
};

const API_URL = "https://jsonplaceholder.typicode.com/albums";

const useJSONPlaceholderAPI = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);
  //temp solution of storing data --> will move to global store
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const buildData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const fetchedAlbums = await response.json();
          const completeAlbums = fetchedAlbums.map(
            ({ id, title }: FetchedAlbum) => ({
              id,
              genre: faker.music.genre(),
              songCount: faker.number.int(24),
              title,
            })
          );
          setAlbums(completeAlbums);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    buildData();
  }, []);
  return { isError, isLoading, albums };
};

export default useJSONPlaceholderAPI;
