import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./cards.scss";

export default function MediaCard(props, { width, mobileSize, setMobileSize }) {
  // window.addEventListener("resize", updateDimensions)
  // const updateDimensions = () => {
  //     width = window.innerWidth;
  // }
  var width;
  var mobile_size;
  const updateDimensions = () => {
    width = window.innerWidth;
    // console.log(width)
    mobile_size = width < 770;
    // console.log(mobile_size);
  };
  const getGridSize = (index) => {
    if (images.length === 1) return 12;
    if (images.length === 2) return 12;
    if (images.length === 3) return index < 2 ? 6 : 12;
    if (images.length >= 4) return 6;
    return 6;
  };
  window.addEventListener("resize", updateDimensions);
  var title = props.title;
  var description = props.description;
  var img1 = props.img1;
  var img2 = props.img2;
  var img3 = props.img3;
  var img4 = props.img4;
  var images = props.images;
  var vid = props.vid;
  var btn1 = props.btn1;
  var btn2 = props.btn2;
  var btnLink1 = props.btnLink1;
  var btnLink2 = props.btnLink2;
  var tags = props.tags;
  var order = props.order;
  if (order === "0") {
    return (
      <Card
        sx={{
          height: "70%",
          maxWidth: "80%",
          display: "flex",
          flexDirection: "" + (mobile_size && "column"),
        }}
      >
        <div className={"media" + (vid.length > 0 ? " hoverable" : "")}>
          <div className="video">
            <video autoPlay loop muted>
              <source src={"https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2F" + vid + "?alt=media"} type="video/mp4" />
            </video>
          </div>
         
          <Grid className="gridContainer" container spacing={0.125}>
            {images.map((img, index) => (
              <Grid
                className={`gridItem ${images.length === 1 ? "fullImage" : ""}`}
                item
                xs={getGridSize(index)}
                key={index}
              >
                <CardMedia
                  component="img"
                  sx={{
                    paddingLeft: 0.125,
                    objectFit: "contain",
                    height: "100%",
                  }}
                  image={`https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2F${img}.webp?alt=media`}
                  alt={img}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="content">
          <div className="top">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>

            <div className="tags">
              {tags.map(function (tag) {
                return (
                  <div className="tag">
                    <img src={tag} alt="" loading="lazy"/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bottom">
            <CardActions>
              <div className="buttons">
                <a
                  href={btnLink1}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Button size="small">{btn1}</Button>
                </a>
                <a
                  href={btnLink2}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Button size="small">{btn2}</Button>
                </a>
              </div>
            </CardActions>
          </div>
        </div>
      </Card>
    );
  } else {
    return (
      <Card
        sx={{
          height: "70%",
          maxWidth: "80%",
          display: "flex",
          flexDirection: "" + (mobile_size && "column"),
        }}
      >
        <div className="content">
          <div className="top">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>

            <div className="tags">
              {tags.map(function (tag) {
                return (
                  <div className="tag">
                    <img src={tag} alt="" loading="lazy"/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bottom">
            <CardActions>
              <div className="buttons">
                <a
                  href={btnLink1}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Button size="small">{btn1}</Button>
                </a>
                <a
                  href={btnLink2}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Button size="small">{btn2}</Button>
                </a>
              </div>
            </CardActions>
          </div>
        </div>
        <div className={"media" + (vid.length > 0 ? " hoverable" : "")}>
          <div className="video">
            <video autoPlay loop muted>
              <source src={"https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2F" + vid + "?alt=media"} type="video/mp4" />
            </video>
          </div>
         
          <Grid className="gridContainer" container spacing={0.125}>
            {images.map((img, index) => (
              <Grid
                className={`gridItem ${images.length === 1 ? "fullImage" : ""}`}
                item
                xs={getGridSize(index)}
                key={index}
              >
                <CardMedia
                  component="img"
                  sx={{
                    paddingLeft: 0.125,
                    objectFit: "contain",
                    height: "100%",
                  }}
                  image={`https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2F${img}.webp?alt=media`}
                  alt={img}
                />
              </Grid>
            ))}
          </Grid>
        
         </div>
      </Card>
    );
  }
}
