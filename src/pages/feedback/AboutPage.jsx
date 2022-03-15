import Card from "../../components/shared/Card"
import {Link} from 'react-router-dom'


function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>This is a React app to leave feedback for a product or service</p>
            </div>
            <Link to="/">
                <p>Back To Home</p>
            </Link>
        </Card>
    )
}

export default AboutPage