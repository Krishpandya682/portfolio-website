import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./cards.scss"
import { display } from '@mui/system';
import { Box } from '@material-ui/core';

export default function MediaCard() {
    return (
        <Card sx={{ height: "70%", maxWidth: "80%", display: 'flex' }}>
            <div className="media">
                <div className="video">
                    <img src="./assets/man.png" alt="" height='400' width='400' />
                </div>
                <div className="row1">
                    <CardMedia
                        component="img"
                        // height="400"
                        sx={{ padding_left: 1 }}
                        image="./assets/man.png"
                        alt="man" />

                    <CardMedia
                        component="img"
                        // height="400"
                        sx={{ padding_left: 1 }}
                        image="./assets/man.png"
                        alt="man" />
                </div>
                <div className="row2">
                    <CardMedia
                        component="img"
                        // height="400"
                        sx={{ padding_left: 1 }}
                        image="./assets/man.png"
                        alt="man" />

                    <CardMedia
                        component="img"
                        // height="400"
                        sx={{ padding_left: 1 }}
                        image="./assets/man.png"
                        alt="man" />
                </div>
            </div>
            <div className="content">

                <div className="top">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </div>
                <div className="bottom">
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </div>
            </div>
        </Card>
    );
}
