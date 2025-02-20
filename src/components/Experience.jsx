import styled from "styled-components";
import { motion } from "framer-motion";
import SectionHeader from "../styles/SectionHeader";

const ExperienceSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5rem 10%;
  position: relative;
  width: 100%;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 900px;
  padding: 2rem 0;
  margin-top: rem;

  @media (max-width: 768px) {
    align-items: flex-start; /* Align items to the left for mobile view */
    padding: 2rem 0;
  }
`;

const ExperienceLabel = styled(motion.div)`
  background: ${({ theme }) => theme.glassBg};
  color: ${({ theme }) => theme.text};
  padding: 8px 16px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.box_shadow};
  white-space: nowrap;
  z-index: 1;
  margin-bottom: 20px;
  text-align: center; /* Default to center for larger screens */

  @media (max-width: 768px) {
    text-align: left; /* Align to left */
    margin-left: 0; /* Remove any margin left that could center it */
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 50px;
  width: 4px;
  height: calc(100% - 50px);
  background: ${({ theme }) => theme.line_color};
  transform: translateX(-50%);
  border-radius: 2px;
  z-index: 0;

  @media (max-width: 768px) {
    left: 20px; /* Adjust the line to match the left-aligned label */
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: ${({ right }) => (right ? "flex-end" : "flex-start")};
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
  z-index: 1;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const ContentBox = styled(motion.div)`
  background: ${({ theme }) => theme.glassBg};
  padding: 20px 25px;
  border-radius: 15px;
  width: 45%;
  max-width: 400px;
  text-align: left;
  backdrop-filter: blur(12px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  box-shadow: ${({ theme }) => theme.box_shadow};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.hover_boxShadow};
  }

  @media (max-width: 768px) {
    left: 50px;
    width: 80%;
    padding: 15px 20px;
  }
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.accent};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  z-index: 2;
  box-shadow: 0 0 10px ${({ theme }) => theme.accent};
  top: ${({ $top }) => $top};
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 8px;
`;

const Duration = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  color: ${({ theme }) => theme.subtext};
  margin-bottom: 12px;
`;

const DescriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;

const DescriptionItem = styled.li`
  margin-bottom: 8px;
`;

const experienceData = [
  {
    title: "Systems Engineer - SAP MM",
    company: "Infosys",
    duration: "Jan 2023 - Present",
    description: [
      "Implemented and supported SAP MM solutions for clients in various industries.",
      "Trained and mentored junior engineers on SAP MM module usage.",
      "Collaborated with business stakeholders to understand requirements and optimize workflows.",
    ],
  },
  {
    title: "Internship - Software Developer",
    company: "Infosys",
    duration: "Jun 2022 - Dec 2022",
    description: [
      "Developed and optimized software modules within the SAP MM module.",
      "Collaborated with cross-functional teams to design and implement process improvements.",
      "Worked closely with the testing team to troubleshoot and fix issues within the software.",
    ],
  },
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Experience
        </motion.div>
      </SectionHeader>
      <TimelineContainer>
        <ExperienceLabel
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: -50,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
        >
          Experience from India
        </ExperienceLabel>
        <TimelineLine />
        {experienceData.map((exp, index) => (
          <TimelineItem
            key={index}
            right={index % 2 === 0}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <ContentBox
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <JobTitle>{exp.title}</JobTitle>
              <Company>{exp.company}</Company>
              <Duration>{exp.duration}</Duration>
              <DescriptionList>
                {exp.description.map((desc, i) => (
                  <DescriptionItem key={i}>{desc}</DescriptionItem>
                ))}
              </DescriptionList>
            </ContentBox>
            <Dot $top={index * 140 + 50} />
          </TimelineItem>
        ))}
      </TimelineContainer>
    </ExperienceSection>
  );
};

export default Experience;
