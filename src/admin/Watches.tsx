import React from "react";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import Title from "./Title";

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  location: string,
  duration: string,
  watchCount: number
) {
  return {
    id,
    date,
    name,
    location,
    duration,
    watchCount,
  };
}

const rows = [
  createData(
    0,
    "23 April, 2023",
    "Journey 2: The Mysterious Island",
    "Tupelo, MS",
    "3250 hours",
    3000
  ),
  createData(
    1,
    "22 April, 2023",
    "Death Race",
    "London, UK",
    "3250 hours",
    2900
  ),
  createData(
    2,
    "21 April, 2023",
    "Battleship",
    "Boston, MA",
    "3250 hours",
    2911
  ),
  createData(
    3,
    "20 April, 2023",
    "Pacific Rim",
    "Gary, IN",
    "3250 hours",
    2866
  ),
  createData(
    4,
    "19 April, 2023",
    "Mowgli: Legend of the Jungle",
    "Long Branch, NJ",
    "3250 hours",
    2951
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Watch</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Most Watched</TableCell>
            <TableCell>Most Watched Location</TableCell>
            <TableCell>Average Duration</TableCell>
            <TableCell align="right">Watch Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.duration}</TableCell>
              <TableCell align="right">{`${row.watchCount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more watches
      </Link>
    </React.Fragment>
  );
}
