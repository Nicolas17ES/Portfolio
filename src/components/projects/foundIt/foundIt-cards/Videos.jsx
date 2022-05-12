import VideoPlayer from 'react-video-js-player'
import React from 'react'
import './Videos.css'

function Videos({videoProp, posterProp}) {
    const videoSrc = videoProp;
    const poster = posterProp
    return (
        <div>
            <VideoPlayer
                src={videoSrc}
                poster={poster}
                width="230"
                height="420"
                playbackRates={[0.75, 1, 1.5]}
            />
        </div>
    )
}

export default Videos