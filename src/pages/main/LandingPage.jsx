import './LandingPage.css'

import Pills from '../../components/shared/pills/Pills'


function LandingPage() {
    // let navigate = useNavigate();

    
    // const redirect = () => {
    //     setTimeout(() => {
    //         return navigate("/feedback");
    //     }, 16300);
    // }

    // useEffect(() => {
    //     redirect();
    // }, [])

    return (
        <div className="landing-page">
            <div className="mainLanding">
                <span className="letter-animation">N</span>
                <span className="letter-animation">I</span>
                <span className="letter-animation">C</span>
                <span className="letter letter-animation"></span>
                <span className="letter-animation">L</span>
                <span className="letter-animation">A</span>
                <span className="letter-animation">S</span>
            </div>
            
            <div className="textOne">
                <p>WELCOME TO</p>
            </div>
            <div className="textTwo">
                <p>MY PORTFOLIO</p>
            </div>
            <div className="image">
                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt=""/>
            </div>
            <div className="access">
                <Pills/>
                {/* <button>Access</button>             */}
            </div>

        </div>
    )
}

export default LandingPage
