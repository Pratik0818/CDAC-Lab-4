import React from "react";
import { ListItemText } from "@mui/material";
//import crossmulti from "../Img/crossmultiplication.png";

const ActStartPopupContent = () => {
  return (
    <>
      <ListItemText sx={{ display: "list-item" }}>We are going to practically verify the angle in a semi-circle is right angle, using vector method.
       </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        We are going to take a circle of radius r.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
       Then we are going to mark the three highlighted points(A,P,C created).
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
      We are going to click on point A,O,B to make lines (AP,AC),(OP,OA,OC) and (BC,BP) respectively.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
       Then we are going to take a protractor to measure the angle between two vectors.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
      After that, we will have a demonstration in which student will put the respective values to verify the activity.
      </ListItemText>
     
     

    </>
  );
};

export default ActStartPopupContent;
