import {  Box } from "@mui/material"
import {Post} from "./Post"


export const Feed = () => {
  return (
    <Box bgcolor="none" flex={4} p={2}>
      <Post />
      <Post />


      
    </Box>
  );
}
