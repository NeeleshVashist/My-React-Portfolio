import styled from "styled-components";
import { motion } from "framer-motion";
import SectionHeader from "../styles/SectionHeader";
import Typewriter from "typewriter-effect";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { profilePic } from "../assets/images"; // Update with your actual image path

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10%;
  text-align: left;
  background: ${({ theme }) => theme.glassBg}; /* Background restored */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 8rem 5%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Content = styled.div`
  flex: 1.5; /* More space for text content */
  max-width: 650px;
  width: 100%;
`;

const ProfileImageContainer = styled.div`
  flex: 1; /* Image takes up less space */
  max-width: 350px; /* Increased size */
  max-height: 350px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 250px;
    height: 250px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  scale: 1.2;
`;

const Description = styled(motion.p)`
  font-size: 1.3rem; /* Slightly larger text */
  opacity: 0.8;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SkillBadge = styled(motion.div)`
  background: ${({ theme }) => theme.glassBg};
  border: 1px solid ${({ theme }) => theme.glassBorder};
  padding: 10px 15px;
  border-radius: 30px;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  font-weight: 600;
  transition: transform 0.3s ease;
  box-shadow: ${({ theme }) => theme.box_shadow};

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Hero = () => {
  const skills = [
    "React",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Framer Motion",
  ];

  return (
    <HeroSection id="home">
      <ContentWrapper>
        {/* Hero Content (Takes More Left Space) */}
        <Content>
          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hey there, I'm Neelesh")
                    .pauseFor(1000)
                    .deleteChars(7)
                    .pauseFor(1000)
                    .typeString("a Developer")
                    .pauseFor(1000)
                    .deleteChars(11)
                    .typeString("an Engineer")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </motion.div>
          </SectionHeader>

          <Description
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            I&apos;m a passionate Data Scientist & AI Engineer with expertise in
            building innovative ML models and high-performance applications. I
            love combining data, design, and technology to create impactful
            solutions.
          </Description>

          <SkillsContainer>
            {skills.map((skill, index) => (
              <SkillBadge key={index} whileHover={{ scale: 1 }}>
                {skill}
              </SkillBadge>
            ))}
          </SkillsContainer>
        </Content>

        {/* Profile Image (Bigger & on the Right) */}
        <ProfileImageContainer>
          <MouseParallaxContainer
            height={200}
            width={200}
            z-index={10}
            globalFactor={0.1}
            easing={0.1}
            resetOnLeave
          >
            <MouseParallaxChild factorX={0.08} factorY={0.08}>
              <ProfileImage src={profilePic} alt="Neelesh Vashist" />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </ProfileImageContainer>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;
