import React from "react";
import { useTheme } from "@mui/material/styles";
import DashHeading from "../lib/DashHeading";
import {
  Bar,
  BarChart,
  Label,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useJSONPlaceholderAPI from "../../hooks/useJSONPlaceholderAPI";
import { useGenres } from "../contexts/GenresContext";
import { getAlbumDataByGenre, getFilteredAlbums } from "../../utils/utils";

const Chart = () => {
  const { albums } = useJSONPlaceholderAPI();

  const theme = useTheme();
  const filteredGenres = useGenres();

  const filteredAlbums = getFilteredAlbums(filteredGenres, albums);
  const songDataByGenre = getAlbumDataByGenre(filteredAlbums);
  /*   The variables above (filteredAlbums and songDataByGenre) are each decent candidates
  to serve as the data for the BarChart below.
  Rather than combining them (and thereby use one helper function),
  the two are separated to provide more flexibility/options when deciding what to display
  in the BarChart. 
 */

  return (
    <>
      <DashHeading>Albums by Genre -- Data Details</DashHeading>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={150}
          height={40}
          data={songDataByGenre}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="genre"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Genre Data
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalSongCount"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="albumsCount"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
          <Bar
            dataKey="avgSongCount"
            fill={theme.palette.primary.dark}
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
