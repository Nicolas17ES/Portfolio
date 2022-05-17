import './VideoDash.css'
import VideoPlayer from 'react-video-js-player'
import React from 'react'

function VideoDash({videoProp, posterProp}) {
    const videoSrc = videoProp;
    const poster = posterProp
    return (
        <div className="video-dash-page">
            <VideoPlayer
                className="video-js-dash"
                src={videoSrc}
                poster={poster}
                width="720"
                height="350"
                playbackRates={[0.75, 1, 1.5]}
            />
        </div>
    )
}

export default VideoDash
