import styled from "styled-components";
import { motion } from "framer-motion";
import SectionHeader from "../styles/SectionHeader";
import Typewriter from "typewriter-effect";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { profilePic } from "../assets/images/profile-pic"; // Update with your actual image path

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
  font-size: 1.1rem;
  opacity: 0.8;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1.1rem;
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

const ContactButton = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  padding: 0.9rem 4rem;
  margin: 3rem 0;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: ${({ theme }) => theme.glassBg};
    color: ${({ theme }) => theme.accent};
    border-radius: 50%;
    transition: all 0.4s ease;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0.2;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 20px ${({ theme }) => theme.accentColor},
      0 0 30px ${({ theme }) => theme.accentColor};
    transform: scale(1.1);
  }

  &:hover::before {
    width: 0;
    height: 0;
    opacity: 0;
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
                    .typeString("a Developer")
                    .pauseFor(1000)
                    .deleteChars(11)
                    .typeString("an Engineer")
                    .pauseFor(1000)
                    .deleteChars(11)
                    .typeString("Neelesh Vashist")
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
          <ContactButton
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </ContactButton>{" "}
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
