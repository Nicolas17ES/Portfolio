import "./MainGames.css";
import { useContext, useEffect, useState } from "react";
import FeedbackContext from "../../context/feedback/FeedbackContext";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

function MainGames() {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();
  const { riddleAnswer, dispatch } = useContext(FeedbackContext);

  const alertLeave = () => {
    let reply = prompt(
      "Until I am measured, I am not known. Yet how you miss me, When I have flown. What am I?"
    );
    if (reply === "time" || reply === "Time" || reply === "TIME") {
      dispatch({
        type: "ANSWER_RIDDLE",
        payload: reply,
      });
      navigate("/games/answers");
    } else if (reply === "") {
      return null;
    } else {
      alert("Wrong answer");
    }
  };

  return (
    <motion.div
      className="main-games"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      exit={{ opacity: 0, transition: { duration: 0.27, delay: .29 } }}
    >
      <h1 className="title-all">
        {" "}
        <sub className="title-sub">play a</sub>
        <span className="title-main">GAME</span>
      </h1>
      <div className="games-page-titles">
        <button onClick={alertLeave} className="title-all-games-2">
          <span className="title-main"> ' take a GUESS '</span>
        </button>
        <Link to={"/games/rock"}>
          <button className="title-all-games-2">
            <span className="title-main"> ' view GAMES '</span>
          </button>
        </Link>
      </div>
      <div className="tennis-table">
        <motion.div
          className="table-left"
          onClick={() => setIsActive(!isActive)}
          initial={{ rotate: 0 }}
          animate={{
            rotate: isActive ? 90 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="leave-button ball b2"
            onClick={alertLeave}
          ></button>
        </motion.div>
        <motion.div
          className="table-right"
          onClick={() => setIsActive(!isActive)}
          initial={{ rotate: 0 }}
          animate={{
            rotate: isActive ? -90 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Link to={"/games/rock"} className="games-button ball b2"></Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MainGames;
