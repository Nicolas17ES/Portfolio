import './FoundIt.css'
import CardMobile from '../../../components/projects/foundIt/foundIt-cards/FoundCard'
import ProjectIntro from '../../../components/projects/foundIt/foundit-intro/Intro'

function FoundIt() {
    return (
        <div className="foundit-page">
            <ProjectIntro/>
            <CardMobile/>
        </div>
    )
}

export default FoundIt
