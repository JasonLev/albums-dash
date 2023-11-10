import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DashHeading from "../lib/DashHeading";
import useJSONPlaceholderAPI from "../../hooks/useJSONPlaceholderAPI";
import { useGenres } from "../contexts/GenresContext";
import { getFilteredAlbums } from "../../utils/utils";

const DashTable = () => {
  const { albums } = useJSONPlaceholderAPI();

  const filteredGenres = useGenres();

  const filteredAlbums = getFilteredAlbums(filteredGenres, albums);

  return (
    <>
      <DashHeading>Albums Details</DashHeading>
      <Table stickyHeader aria-label="albums table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Album Title</b>
            </TableCell>
            <TableCell>
              <b>Genre</b>
            </TableCell>
            <TableCell align="right">
              <b>Song Count</b>
            </TableCell>
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
