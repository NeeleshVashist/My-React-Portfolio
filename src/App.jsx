import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Education from "./components/Education";
import GoToTopButton from "./components/GoToTopButton";
import AboutMe from "./components/About";
import Achievements from "./components/Achievements";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <CustomCursor />
      <div className="content">
        {/* Page Transition Wrapper */}
        <PageTransition>
          {/* Sections */}
          <Hero />
          <AboutMe />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Achievements />
          <Contact />
        </PageTransition>
      </div>
      <Footer />
      <GoToTopButton />
    </ThemeProvider>
  );
}

export default App;
