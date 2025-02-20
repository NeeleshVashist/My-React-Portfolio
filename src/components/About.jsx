import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import SectionHeader from "../styles/SectionHeader";
import { useEffect, useCallback } from "react";

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10%;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

const AboutContainer = styled.div`
  background: ${({ theme }) => theme.glassBg};
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  box-shadow: ${({ theme }) => theme.box_shadow};
  max-width: 1000px;
  width: 100%;
  text-align: center;
  margin: auto;

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

const AboutHeading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondaryText};
  line-height: 1.7;
  margin-bottom: 20px;
  text-align: justify;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

const About = () => {
  const controls = useAnimation();

  const onScrollIntoView = useCallback(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const handleScroll = () => {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
        onScrollIntoView();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, onScrollIntoView]);

  return (
    <AboutSection id="about">
      <SectionHeader>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A Glimpse Into My Journey
        </motion.p>
      </SectionHeader>

      <AboutContainer>
        <AboutHeading
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          Who Am I?
        </AboutHeading>

        <AboutText
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          Hi, I’m <HighlightedText>Neelesh</HighlightedText>, a Data Scientist
          passionate about <HighlightedText>AI</HighlightedText>,
          <HighlightedText> Machine Learning</HighlightedText>, and Tech
          Innovation.
        </AboutText>

        <AboutText
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          My journey started with a simple question:
          <HighlightedText> How can data shape the world? </HighlightedText>
          What began as curiosity soon evolved into a deep passion for solving
          complex problems with intelligent models.
        </AboutText>

        <AboutText
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          Today, I specialize in building
          <HighlightedText> predictive algorithms</HighlightedText>, fine tuning
          <HighlightedText> AI models</HighlightedText> and
          <HighlightedText> deep learning models</HighlightedText>, and
          transforming raw data into meaningful insights.
        </AboutText>

        <AboutText
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          I thrive on <HighlightedText>continuous learning </HighlightedText>
          and <HighlightedText> challenges</HighlightedText> that push my
          limits. Whether it’s working with
          <HighlightedText> big data</HighlightedText>, refining
          state-of-the-art AI models, or exploring
          <HighlightedText> cutting-edge technologies</HighlightedText>, my goal
          is to build innovative solutions that create real impact.
        </AboutText>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
