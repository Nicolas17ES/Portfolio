import './Timeline.css'

function Timeline({data}) {
    return (
        <div className="timeline-container">
            <div className="rightbox">
                <div className="rb-container">
                    <ul className="rb">
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                                {data.titleOne}
                            </div>
                            <div className="item-title">{data.bodyOne}</div>
                        </li>
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                                {data.titleTwo}
                            </div>
                            <div className="item-title">{data.bodyTwo}</div>
                        </li>
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                                {data.titleThree}
                            </div>
                            <div className="item-title">{data.bodyThree}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Timeline
