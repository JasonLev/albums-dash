import React, { useState } from "react";
import DashHeading from "./lib/DashHeading";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useGenres, useGenresDispatch } from "./contexts/GenresContext";
import Button from "@mui/material/Button";
import FilteredGenreList from "./FilteredGenreList";

type Props = {
  genres: string[];
};

const FilterGenre = ({ genres }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const dispatch = useGenresDispatch();
  const filteredGenres = useGenres();

  const handleChange = (event: React.SyntheticEvent, value: string | null) => {
    event.preventDefault();
    setSelectedGenre(value);
  };
  const handleAdd = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (selectedGenre?.length) {
      dispatch({
        type: "added",
        text: selectedGenre,
      });
      setSelectedGenre(null);
    }
  };

  return (
    <>
      <DashHeading>Genre Filter</DashHeading>
      <Autocomplete
        id="filter-input"
        onChange={handleChange}
        options={genres}
        filterOptions={(options) =>
          options.filter((option) => !filteredGenres.includes(option))
        }
        renderInput={(params) => (
          <TextField {...params} label="Filter by genre" />
        )}
        value={selectedGenre}
      />
      <Button variant="contained" onClick={handleAdd}>
        Filter Genre
      </Button>
      <FilteredGenreList />
    </>
  );
};

export default FilterGenre;
