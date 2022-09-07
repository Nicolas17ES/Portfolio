import "./Home2.css";
import HomeSvg from "./HomeSvg2";

function Home2() {
  return (
    <div className="home2">
      <div className="intro-left">
        <h1 className="home2-title">Welcome to my portfolio</h1>
          <div className="home-main-texts">
            <p className="text-left">
            'My name is Nicolas and I am a Web Developer specialized in front
            end design and back end functionality. '
          </p>
          <p className="text-left">
            ' and this is how I acquired the knowledge and skills to turn designs into dynamic websites'
          </p>
          </div>
      </div>
      <div className="intro-right">
        <HomeSvg />
        <HomeSvg />
        <HomeSvg />
      </div>
    </div>
  );
}

export default Home2;
