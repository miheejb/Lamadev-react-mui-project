import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

export const Post = () => {
  return (
    <Card margin={2} elevation={10}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "turquoise" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Velet Bella"
        subheader="Febuary 09, 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        image="/assets/images/velvetbella.jpg"
        alt="Velvet Bella"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive feline is a perfect companion. With velvet hairless
          skin 'Bella' will give you sensation of joy and warmth when you
          cuddle. she is affectionate, playful and sassy. Have a chat with Bella
          after the hardcoding day.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
