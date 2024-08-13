import { useCallback, useEffect, useState } from "react";

import "./App.css";
import Hero from "./views/Hero";
import About from "./views/About";
import Experience from "./views/Experience";
import Quiz from "./views/Quiz";
import Contact from "./views/Contact";
import debounce from "lodash.debounce";
import Navbar from "./components/Navbar";

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleScroll = useCallback(() => {
    // 50vh
    const threshold = window.innerHeight;
    const scrollTop = window.scrollY;

    // Check if the scroll position has passed 100vh
    setIsNavVisible(scrollTop > threshold);
  }, []);

  const debouncedHandleScroll = useCallback(debounce(handleScroll, 50), [
    handleScroll,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Quiz />
      <Contact />
      <Navbar isVisible={isNavVisible} />
    </>
  );
}

export default App;
