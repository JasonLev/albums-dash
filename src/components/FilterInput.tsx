import React, { useState } from "react";
import DashHeading from "./lib/DashHeading";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

type Props = {
  genres: string[];
};

const FilterInput = ({ genres }: Props) => {
  // temp solution during development --> will add to global storage
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleChange = (event: React.SyntheticEvent, values: string[]) => {
    event.preventDefault();
    setSelectedGenres(values);
  };

  return (
    <>
      <DashHeading>Genre Filter</DashHeading>
      <Autocomplete
        multiple
        id="filter-input"
        onChange={handleChange}
        options={genres}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label="Filter by genre" />
        )}
      />
    </>
  );
};

export default FilterInput;
