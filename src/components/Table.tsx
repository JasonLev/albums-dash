import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DashHeading from "./lib/DashHeading";
import useJSONPlaceholderAPI from "../hooks/useJSONPlaceholderAPI";
import FilteredGenreList from "./FilteredGenreList";
import { useGenres } from "./contexts/GenresContext";

const DashTable = () => {
  const { albums } = useJSONPlaceholderAPI();

  const filteredGenres = useGenres();

  const filteredAlbums = filteredGenres.length
    ? albums.filter((album) => filteredGenres.includes(album.genre))
    : albums;

  return (
    <>
      <DashHeading>Albums Details</DashHeading>
      <FilteredGenreList textOnly />
      <Table stickyHeader aria-label="albums table">
        <TableHead>
          <TableRow>
            <TableCell>Album Title</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell align="right">Song Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredAlbums.map(({ id, genre, songCount, title }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{title}</TableCell>
              <TableCell>{genre}</TableCell>
              <TableCell align="right">{songCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default DashTable;
