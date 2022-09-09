import "./Home2.css";
import portrait from "../../assets/fluid16.png";
import { FcContacts } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FeedbackContext from "../../../context/feedback/FeedbackContext";
import ScrollButton from "../../shared/scroll-button/ScrollButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeSvg from "./HomeSvg2";
import Loader from "./loader/Loader";

function Home() {
  const { dispatch, scroll, hasAnimated } = useContext(FeedbackContext);
  const scrollTo = useRef();

  const [reference, inView] = useInView();
  const animation = useAnimation();
  const animationLeft = useAnimation();
  const animationLeftDelay = useAnimation();
  const animationLeftDelayTwo = useAnimation();

  //   scroll to x component//
  useEffect(() => {
    if (scroll === 0) {
      scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center" });
      dispatch({
        type: "SCROLL_VIEW",
        payload: false,
      });
    }
  }, [scroll, dispatch]);

  const executeScroll = () => {
    dispatch({
      type: "SCROLL_VIEW",
      payload: 1,
    });
  };

//   scroll to x component//


// animations for full page and comp//

  useEffect(() => {
    if (inView) {
        // animate full page
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.2,
          delay: 0.1,
        },
      });

    // animate from left
      animationLeft.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: 0.2,
          duration: 0.7,
        },
      });
       // animate left delay
      animationLeftDelay.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: 0.2,
          duration: 0.7,
        },
      });

        // animate left EXTR delay
      animationLeftDelayTwo.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: 0.2,
          duration: 0.7,
        },
      });
    } else if (!inView) {
      animation.start({ opacity: 0 });
          // animate form left
      animationLeft.start({ x: "-100vw", opacity: 0 });
        // animate left delay
      animationLeftDelay.start({ x: "100vw", opacity: 0 });
        // animate left EXTR delay
      animationLeftDelayTwo.start({ x: "-100vw", opacity: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animation, inView]);

  // animations for full page and comp//





//   if (hasAnimated === true) {
    return (
      <div ref={reference}>
          <span ref={scrollTo} className="top-absolute"></span>
        <motion.div animate={animation} className="home2">
          <div className="intro-left">
            <motion.h1 animate={animationLeft} className="home2-title">Welcome to my portfolio</motion.h1>
            <div className="home-main-texts">
              <motion.p animate={animationLeftDelay} className="text-left">
                ' My name is Nicolas and I am a Web Developer specialized in
                front end design and back end functionality '
              </motion.p>
              <motion.p animate={animationLeftDelayTwo} className="text-left">
                ' and this is how I acquired the knowledge and skills to turn
                designs into dynamic websites '
              </motion.p>
            </div>
          </div>
          <motion.div whileHover={{scale: 1.08, transition: {duration: .3}}} animate={animationLeftDelay} className="intro-right">
              <Link to="/contact">
                  <div className="main-lines">
                    <p>GET IN TOUCH</p>
                </div>
              </Link>
              <Link to="/contact">
              <div className="main-svgs">
                <HomeSvg />
                <HomeSvg />
                <HomeSvg />
            </div>
              </Link>
            
          </motion.div>
        </motion.div>
         <motion.div
          onClick={executeScroll}
          initial={{ opacity: 0, y: "300px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, delay: .2 }}
        >
          <ScrollButton />
        </motion.div>
      </div>
    );
//   } else {
//     return (
//       <div ref={reference}>
//         <motion.div animate={animation} className="home-page-one">
//           <span ref={scrollTo} className="top-absolute"></span>
//           <div className="welcome-figure">
//             <div class="inner-welcome">
//               <span>Hi I'm bla bla,</span>
//               <span className="span-margin">a Bla Blu BU</span>
//             </div>
//             <div class="inner-welcome">
//               <span>Hi I'm bla bla,</span>
//               <span className="span-margin">a Bla Blu BU</span>
//             </div>
//           </div>
//           <div className="home-figures">
//             <motion.div className="svg-one">
//               <HomeSvg />
//             </motion.div>

//             <motion.div
//               className="between-svgs"
//               initial={{ opacity: 0, y: "300px" }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.1, delay: 1 }}
//             >
//               <motion.p
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ type: "spring", duration: 0.7 }}
//               >
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
//                 fugit at impedit doloribus itaque nobis reiciendis magnam iure
//                 animi omnis. Lorem ipsum dolor.
//               </motion.p>
//             </motion.div>
//             <motion.div drag className="svg-two">
//               <HomeSvg />
//             </motion.div>
//           </div>
//           <motion.div
//             onClick={executeScroll}
//             initial={{ opacity: 0, y: "300px" }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.1, delay: 1 }}
//           >
//             <ScrollButton />
//           </motion.div>
//           {/* <motion.div
//                     className='cursor'
//                     variants={variants}
//                     animate={cursorVariant}
//                 /> */}
//         </motion.div>
//       </div>
//     );
//   }
}

export default Home;
