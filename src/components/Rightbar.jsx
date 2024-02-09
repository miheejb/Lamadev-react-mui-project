import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box
      bgcolor="none"
      flex={2}
      p={2}
      xs={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          {" "}
          Online Friends{" "}
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/assets/images/avatar1.svg" />
          <Avatar alt="Travis Howard" src="/assets/images/avatar2.svg" />
          <Avatar alt="Cindy Baker" src="/assets/images/avatar3.svg" />
          <Avatar alt="Agnes Walker" src="/assets/images/avatar4.svg" />
          <Avatar alt="Trevor Henderson" src="/assets/images/avatar5.svg" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={150} gap={5}>
          <ImageListItem>
            <img src="./assets/images/cat1.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="./assets/images/cat2.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="./assets/images/cat3.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="./assets/images/cat4.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="./assets/images/cat5.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="./assets/images/cat6.jpg" alt="" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2} >
          Latest Communications
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/assets/images/avatar1.svg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/assets/images/avatar2.svg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/assets/images/avatar3.svg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
