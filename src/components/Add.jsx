import { Fab, Tooltip } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

export const Add = () => {
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: "20",
          left: { xs: "calc(50% -25)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};
export default Add;
