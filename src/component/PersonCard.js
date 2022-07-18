import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  media: {
    width: 350,
  },
});
const PersonCard = () => {
  const classes = useStyles();
  const { details } = useSelector((state) => state.taskReducer);

  return (
    <>
      {details?.map((person, id) => (
        <Card key={person.id} sx={{ maxWidth: 345 }}>
          <h3>
            {person.first_name} {person.last_name}
          </h3>
          <CardMedia
            className={classes.media}
            component="img"
            height="240"
            alt="0"
            image={person.avatar}
          />
          <CardContent>
            <Typography variant="h5">ID : {person.id}</Typography>
            <Typography variant="h6">
              First Name : {person.first_name}
            </Typography>
            <Typography variant="h6">Last Name : {person.last_name}</Typography>
            <Typography variant="h6">Email : {person.email}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default PersonCard;
