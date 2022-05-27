import VideoPlayer from 'react-video-js-player'
import React from 'react'
import './Videos.css'

function Videos({videoProp, posterProp}) {
    const videoSrc = videoProp;
    const poster = posterProp
    return (
        <div>
            <VideoPlayer
            className="video-js-found"
                src={videoSrc}
                poster={poster}
                width="230"
                height="420"
                muted={true}
                playbackRates={[0.75, 1, 1.5]}
            />
        </div>
    )
}

export default Videos
