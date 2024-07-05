import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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

  window.addEventListener("resize", updateDimensions);
  var title = props.title;
  var description = props.description;
  var img1 = props.img1;
  var img2 = props.img2;
  var img3 = props.img3;
  var img4 = props.img4;
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
              <source src={"./assets/" + vid} type="video/mp4" />
            </video>
          </div>

          <div className="row1">
            <CardMedia
              component="img"
              // height="400"
              sx={{ padding_left: 1, object_fit: "contain" }}
              image={"./assets/" + img1 + ".png"}
              alt={img1}
            />

            <CardMedia
              component="img"
              // height="400"
              sx={{ padding_left: 1, object_fit: "contain" }}
              image={"./assets/" + img2 + ".png"}
              alt={img2}
            />
          </div>
          <div className="row2">
            <CardMedia
              component="img"
              // height="400"
              sx={{ padding_left: 1, object_fit: "contain" }}
              image={"./assets/" + img3 + ".png"}
              alt={img3}
            />

            <CardMedia
              component="img"
              // height="400"
              sx={{ padding_left: 1, object_fit: "contain" }}
              image={"./assets/" + img4 + ".png"}
              alt={img4}
            />
          </div>
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
                    <img src={tag} alt="" />
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
                    <img src={tag} alt="" />
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
              <source src={"./assets/" + vid} type="video/mp4" />
            </video>
          </div>

          <div className="row1">
            <CardMedia
              component="img"
              // height="400"
              sx={{ padding_left: 1, object_fit: "contain" }}
              image={"./assets/" + img1 + ".png"}
              alt={img1}
            />

            <CardMedia
              component="img"
              // height="400"
              sx={{ padding_left: 1, object_fit: "contain" }}
              image={"./assets/" + img2 + ".png"}
              alt={img2}
            />
          </div>
          <div className="row2">
            <CardMedia
              component="img"
              // height="400"
              sx={{ padding_left: 1, object_fit: "contain" }}
              image={"./assets/" + img3 + ".png"}
              alt={img3}
            />

            <CardMedia
              component="img"
              // height="400"
              sx={{ padding_left: 1, object_fit: "contain" }}
              image={"./assets/" + img4 + ".png"}
              alt={img4}
            />
          </div>
        </div>
      </Card>
    );
  }
}
