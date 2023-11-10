import { createContext, useContext } from "react";

export const GenresContext = createContext<string[]>([]);
export const GenresDispatchContext = createContext<any>(null);

type ActionType = {
  type: "added" | "removed";
  text: string;
};

export function useGenres() {
  return useContext(GenresContext);
}

export function useGenresDispatch() {
  return useContext(GenresDispatchContext);
}

export function genresReducer(genres: string[], action: ActionType) {
  switch (action.type) {
    case "added": {
      return [...genres, action.text];
    }
    case "removed": {
      return genres.filter((genre) => genre !== action.text);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
