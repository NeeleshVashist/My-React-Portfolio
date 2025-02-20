import styled from "styled-components";
import { motion } from "framer-motion";
import SectionHeader from "../styles/SectionHeader";

const AchievementsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10%;
  background: ${({ theme }) => theme.background};
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  justify-content: center;
  align-items: stretch; /* Ensures all cards stretch to the tallest one */
  padding-top: 2rem;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.glassBg};
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(15px);
  box-shadow: ${({ theme }) => theme.box_shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 300px; /* Uniform width for all cards */
  min-height: 300px; /* Adapts to the tallest card */
  max-width: 350px; /* Prevents excessive stretching */

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.hover_boxShadow};
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 1rem; // Adjust spacing
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  text-align: center;
  margin-bottom: 1rem; // Adjust spacing for consistency
`;

const ViewButton = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.accent};
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  border: ${({ theme }) => `2px solid ${theme.accent}`};

  &:hover {
    color: ${({ theme }) => theme.button_hover_text};
    background: ${({ theme }) => theme.button_hover_bg};
    border: 1px solid ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }
`;

const achievements = [
  {
    title: "IBM Data Science Certificate",
    desc: "Completed IBM's specialization on Coursera.",
    details:
      "This achievement includes completing a 10-course Data Science series on Coursera, covering key topics like Python, Data Analysis, Machine Learning, and more.",
    certificateLink: "https://coursera.org/ibm-ds-cert",
    icon: "/path/to/ibm-logo.png",
  },
  {
    title: "Machine Learning Certification",
    desc: "Completed Andrew Ng's ML course.",
    details:
      "Completed the foundational course in Machine Learning by Andrew Ng, covering key concepts such as supervised learning, regression, and neural networks.",
    certificateLink: "https://www.coursera.org/stanford-ml",
    icon: "/path/to/ml-logo.png",
  },
  {
    title: "Hackathon Winner",
    desc: "Winner of XYZ AI Hackathon.",
    details:
      "Won 1st place in the XYZ AI Hackathon, building a predictive model for real-time analysis.",
    certificateLink: "https://xyz-hackathon.com/certificate",
    icon: "/path/to/hackathon-logo.png",
  },
];

const Achievements = () => {
  return (
    <AchievementsSection id="achievements">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Animates only once when appearing
          transition={{ duration: 1 }}
        >
          Achievements & Certifications
        </motion.div>
      </SectionHeader>
      <GridContainer>
        {achievements.map((achieve, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Title>{achieve.title}</Title>
            <Description>{achieve.desc}</Description>
            <ViewButton href={achieve.certificateLink} target="_blank">
              View Certificate
            </ViewButton>
          </Card>
        ))}
      </GridContainer>
    </AchievementsSection>
  );
};

export default Achievements;
