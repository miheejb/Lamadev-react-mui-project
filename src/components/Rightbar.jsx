import { Avatar, AvatarGroup, Box, Typography } from "@mui/material"
import React from "react"

export const Rightbar = () => {
  return (
    <Box
      bgcolor="none"
      flex={2}
      p={2}
      xs={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          {" "}
          Online Friends{" "}
        </Typography>
        <AvatarGroup max={4}>
          <Avatar  alt="Remy Sharp" src="/assets/images/avatar1.svg" />
          <Avatar alt="Travis Howard" src="/assets/images/avatar2.svg" />
          <Avatar alt="Cindy Baker" src="/assets/images/avatar3.svg"  />
          <Avatar alt="Agnes Walker" src="/assets/images/avatar4.svg"  />
          <Avatar alt="Trevor Henderson" src="/assets/images/avatar5.svg" />
        </AvatarGroup>
      </Box>
    </Box>
  );
}
