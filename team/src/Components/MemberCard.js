import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import gsap from "gsap";

export default function MemberCard(props) {
  const { member } = props;

  return (
    <Card elevation={21} sx={{ minWidth: "60%" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h2" align="center" component="div">
          {member.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {member.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
