import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DashHeading from "./lib/DashHeading";
import useJSONPlaceholderAPI from "../hooks/useJSONPlaceholderAPI";

const DashTable = () => {
  const { albums } = useJSONPlaceholderAPI();

  return (
    <>
      <DashHeading>Albums</DashHeading>
      <Table stickyHeader aria-label="albums table">
        <TableHead>
          <TableRow>
            <TableCell>Album Title</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell align="right">Song Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albums.map(({ id, genre, songCount, title }) => (
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
