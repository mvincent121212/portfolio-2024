import { useState } from "react";
import "./App.css";
import Navigation from "./deprecated/navigation/Navigation";
import Hero from "./views/Hero";
import About from "./views/About";
import Experience from "./views/Experience";
import Quiz from "./views/Quiz";
import Contact from "./views/Contact";

function App() {
  const [screenPositionIndex, setScreenPositionIndex] = useState(0);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Quiz />
      <Contact />
      {/* <Navigation
        screenPositionIndex={screenPositionIndex}
        setScreenPositionIndex={setScreenPositionIndex}
      /> */}
    </>
  );
}

export default App;

// const [prevIndex, setPrevIndex] = useState(0);

// if (prevIndex !== screenPositionIndex) {

//   setPrevIndex(screenPositionIndex);
// }

// useEffect(() => {
//   window.addEventListener("touchmove", (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     handleScroll({
//       scrollDirection,
//       screenPositionIndex,
//       setScreenPositionIndex,
//     });
//   });

//   window.addEventListener("scroll", (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     handleScroll({
//       scrollDirection,
//       screenPositionIndex,
//       setScreenPositionIndex,
//     });
//   });

//   window.addEventListener("keyup", (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     decrementIndex({ screenPositionIndex, setScreenPositionIndex });
//   });

//   window.addEventListener("keydown", (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     incrementIndex({ screenPositionIndex, setScreenPositionIndex });
//   });

//   return () => {
//     window.removeEventListener("touchmove", (e) => {
//       e.stopPropagation();
//       e.preventDefault();
//       handleScroll({
//         scrollDirection,
//         screenPositionIndex,
//         setScreenPositionIndex,
//       });
//     });
//     window.removeEventListener("scroll", (e) => {
//       e.stopPropagation();
//       e.preventDefault();
//       handleScroll({
//         scrollDirection,
//         screenPositionIndex,
//         setScreenPositionIndex,
//       });
//     });
//     window.removeEventListener("keyup", (e) => {
//       e.stopPropagation();
//       e.preventDefault();
//       decrementIndex({ screenPositionIndex, setScreenPositionIndex });
//     });

//     window.removeEventListener("keydown", (e) => {
//       incrementIndex({ screenPositionIndex, setScreenPositionIndex });
//       e.stopPropagation();
//       e.preventDefault();
//     });
//   };
// }, []);
