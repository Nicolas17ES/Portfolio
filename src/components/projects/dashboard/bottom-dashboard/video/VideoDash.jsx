import './VideoDash.css'
import VideoPlayer from 'react-video-js-player'


import React from 'react'

function VideoDash({videoProp}) {
    const videoSrc = videoProp;
    // const poster = posterProp
    return (
        <div className="video-dash-page">
            <VideoPlayer
                className="video-js-dash"
                src={videoSrc}
                width="950"
                height="510"
                autoplay={false}
                muted={true}
                controls={true}
            />
        </div>
    )
}

export default VideoDash
