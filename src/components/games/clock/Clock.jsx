import './Clock.css'

function Clock() {
    return (
        <div className="reply-time">
            <div className="reply">
                <h1 className="title-all-clock"> <sub className="title-sub-clock">' time '</sub><span className="title-main-clock">TIME</span></h1>
            </div>
            <div class="clock">
                <div class="outer-clock-face">
                    {/* <div class="marking marking-one"></div>
                    <div class="marking marking-two"></div>
                    <div class="marking marking-three"></div>
                    <div class="marking marking-four"></div> */}
                    <div class="inner-clock-face">
                    <div class="hand hour-hand"></div>
                    <div class="hand min-hand"></div>
                    <div class="hand second-hand"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clock
