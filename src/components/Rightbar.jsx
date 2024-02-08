import { Box } from "@mui/material"
import React from "react"

export const Rightbar = () => {
  return (
    <Box
      bgcolor="none"
      flex={2}
      p={2}
      xs={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed"> rightbar </Box>
      
    </Box>
  );
}
