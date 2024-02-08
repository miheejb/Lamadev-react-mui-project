import { Box, List, ListItem,ListItemButton,ListItemIcon, ListItemText, } from "@mui/material"


export const Sidebar = () => {
  return (
    <Box bgcolor='skyblue' flex={1} p={2} xs={{display: {xs: "none", sm:"block"}}}>
      
      <List>
          <ListItem disablePadding>
            <ListItemButton compo>
              <ListItemIcon>
            
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          </List>
          
          </Box>
  )
}
