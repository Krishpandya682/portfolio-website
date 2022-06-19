import React from 'react'

export default function CardMedia(props) {


    return (
        <div className="media">
            <div className="video">
                <img src="./assets/man.png" alt="" />
            </div>
            <div className="row1">
                <CardMedia
                    component="img"
                    height="400"
                    sx={{ padding_left: 1 }}
                    image="./assets/man.png"
                    alt="man" />

                <CardMedia
                    component="img"
                    height="400"
                    sx={{ padding_left: 1 }}
                    image="./assets/man.png"
                    alt="man" />
            </div>
            <div className="row2">
                <CardMedia
                    component="img"
                    height="400"
                    sx={{ padding_left: 1 }}
                    image="./assets/man.png"
                    alt="man" />

                <CardMedia
                    component="img"
                    height="400"
                    sx={{ padding_left: 1 }}
                    image="./assets/man.png"
                    alt="man" />
            </div>
        </div>

    )
}
