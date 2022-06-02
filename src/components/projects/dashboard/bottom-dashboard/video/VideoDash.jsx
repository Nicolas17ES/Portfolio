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
                // poster={poster}
                width="850"
                height="420"
                autoplay={false}
                muted={true}
            />
        </div>
    )
}

export default VideoDash
