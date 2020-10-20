import React from "react";
import businesses from "../businesses.json";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Business = (props) => {
  const id = props.match.params.id;

  const business = businesses.find((business) => business.id == id);

  return (
    <Container maxWidth="sm">
      <Typography className="biz-paper">
        <h2>{business["Name"]}</h2>
        <h5>{business["Address"]}</h5>
        <h5>{business["Hours"]}</h5>
        <p>{business["Description"]}</p>
      </Typography>
    </Container>
  );
};
export default Business;
