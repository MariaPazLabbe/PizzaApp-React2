import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";


export default function ListUnitPizza({ value }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={value.img} alt={value.name}></Avatar>
      </ListItemAvatar>
      <ListItemText primary={value.name} secondary={value.price} />
    </ListItem>
  );
}
