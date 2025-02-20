import styled from "styled-components";
import { motion } from "framer-motion";
import SectionHeader from "../styles/SectionHeader";

// Education Section Styling
const EducationSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10%;
  background: ${({ theme }) => theme.background};
`;

const EducationContainer = styled.div`
  padding: 2rem 0;
  max-width: 1000px;
  margin: 0 auto;
`;

const EducationItem = styled(motion.div)`
  background: ${({ theme }) => theme.glassBg};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.box_shadow};
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const EducationTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textColor};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EducationDuration = styled.p`
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 1rem;

  & span {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const EducationDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
  line-height: 1.6;
  color: ${({ theme }) => theme.textColor};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <SectionHeader>
        <div>My Education</div>
      </SectionHeader>

      <EducationContainer>
        {/* Graduate Certificate in AI and ML */}
        <EducationItem
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: -50,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div>
            <EducationTitle>
              Graduate Certificate in AI and Machine Learning
            </EducationTitle>
            <EducationDuration>
              2022 - 2023 | <span>Lambton College, Toronto, Canada</span>
            </EducationDuration>
            <EducationDescription>
              Gained hands-on experience in AI and ML techniques, with a focus
              on deep learning, neural networks, natural language processing,
              and data analysis.
            </EducationDescription>
          </div>
        </EducationItem>

        {/* Bachelor's Degree */}
        <EducationItem
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: -50,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div>
            <EducationTitle>
              Bachelor of Engineering (B.E.) in Computer Science
            </EducationTitle>
            <EducationDuration>
              2016 - 2020 | <span>Chitkara University, India</span>
            </EducationDuration>
            <EducationDescription>
              Completed a comprehensive degree program focusing on software
              development, algorithms, data structures, and computer systems.
            </EducationDescription>
          </div>
        </EducationItem>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;
