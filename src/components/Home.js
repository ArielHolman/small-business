import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import businesses from "../businesses.json";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {businesses.map((business, id) => (
            <TableRow key={business.id}>
              <TableCell style={{ color: "mediumblue" }}>
                <Link to={`/business/${business.id}`}>{business.Name}</Link>
              </TableCell>
              <TableCell>{business.Description}</TableCell>
              <TableCell>{business.Hours}</TableCell>
              <TableCell>{business.Address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Home;
