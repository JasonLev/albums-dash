import React from "react";
import { useGenres, useGenresDispatch } from "./contexts/GenresContext";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";

type Props = {
  textOnly?: boolean;
};
const FilteredGenreList = ({ textOnly }: Props) => {
  const genres = useGenres();
  const dispatch = useGenresDispatch();

  const handleClick = (genre: string) =>
    dispatch({
      type: "removed",
      text: genre,
    });

  const genreListText = genres.length ? genres.join(", ") : "All";
  return (
    <>
      {textOnly ? (
        <h3>
          <span>Current Filtered Genres: {""}</span>
          <span>{genreListText}</span>
        </h3>
      ) : (
        <div>
          {genres.length > 0 &&
            genres.map((genre) => {
              return (
                <div key={genre}>
                  <span>{genre}</span>{" "}
                  <IconButton
                    onClick={() => handleClick(genre)}
                    aria-label="remove"
                  >
                    <CancelIcon />
                  </IconButton>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default FilteredGenreList;
