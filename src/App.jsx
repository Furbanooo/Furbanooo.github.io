import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import {
  NavBar,
  Profile,
  Presentation,
  Skills,
  Tools,
  Projects,
  Ideas,
} from "./components/component.js";

function App() {
  const components = [
    <Presentation key="presentation" />,
    <Skills key="skills" />,
    <Tools key="tools" />,
    <Projects key="projects" />,
    <Ideas key="ideas" />,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const handleScroll = (event) => {
    const container = document.querySelector(".content-container"); // Select the scrollable content
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;

    if (event.deltaY > 0 && scrollTop + clientHeight >= scrollHeight - 10) {
      // Scroll down and at the bottom of the container
      setActiveIndex((prevIndex) => {
        if (prevIndex < components.length - 1) {
          setDirection(1);
          return prevIndex + 1;
        }
        return prevIndex;
      });
    } else if (event.deltaY < 0 && scrollTop <= 10) {
      // Scroll up and at the top of the container
      setActiveIndex((prevIndex) => {
        if (prevIndex > 0) {
          setDirection(-1);
          return prevIndex - 1;
        }
        return prevIndex;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center gap-12">
        <NavBar />

        <div className="flex flex-row gap-10 justify-center w-full min-h-screen px-10">
          <Profile />

          <div className="w-3/4 rounded-3xl shadow-left-top flex flex-col justify-start items-center px-5 py-5 fade-in overflow-y-auto content-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  x: direction === 1 ? 100 : -100,
                  y: direction === 1 ? 100 : -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction === 1 ? -100 : 100,
                  y: direction === 1 ? -100 : 100,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {components[activeIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
