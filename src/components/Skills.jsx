import styled from "styled-components";
import { motion } from "framer-motion";
import SectionHeader from "../styles/SectionHeader";
import {
  FaPython,
  FaReact,
  FaRProject,
  FaDatabase,
  FaRobot,
  FaChartLine,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiPytorch,
  SiTensorflow,
  SiTableau,
  SiScikitlearn,
  SiKubernetes,
  SiApache,
  SiFastapi,
  SiOpencv,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPandas,
  SiNumpy,
  SiApachehadoop,
  SiApachespark,
  SiApacheairflow,
  SiLangchain,
} from "react-icons/si";

// Skill Section Style
const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10%;
  overflow: hidden;
  width: 100%;
`;

const SkillsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  max-width: 100%;
  width: 100%;
  margin-top: 2rem;
  padding: 0 1rem;
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme, $color }) => $color || theme.text};
  margin-bottom: 8px;
  transition: transform 0.3s ease, filter 0.3s ease;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.glassBg};
  padding: 15px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 150px;
  width: 150px;
  box-shadow: ${({ theme }) => theme.box_shadow};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.hover_boxShadow};
  }

  &:hover ${IconWrapper} {
    transform: scale(1.2);
    filter: drop-shadow(
      0px 0px 10px
        ${({ theme, $color }) =>
          theme.mode === "light" ? `${$color}80` : `${$color}CC`}
    );
  }
`;

const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

// Skills Data
const skills = [
  { name: "Python", icon: <FaPython />, color: "#306998" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "R", icon: <FaRProject />, color: "#276DC1" },
  { name: "Machine Learning", icon: <FaRobot />, color: "#76B041" },
  { name: "Deep Learning", icon: <SiTensorflow />, color: "#FF6F00" },
  { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
  { name: "Data Science", icon: <FaDatabase />, color: "#4F4A4A" },
  { name: "Statistics", icon: <FaChartLine />, color: "#2980B9" },
  { name: "Data Visualization", icon: <SiTableau />, color: "#E76B2E" },
  { name: "Scikit-Learn", icon: <SiScikitlearn />, color: "#F7931E" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
  { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Pandas", icon: <SiPandas />, color: "#150458" },
  { name: "NumPy", icon: <SiNumpy />, color: "#4C8CBF" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  { name: "Apache", icon: <SiApache />, color: "#D22128" },
  { name: "Hadoop", icon: <SiApachehadoop />, color: "#FFBC00" },
  { name: "Spark", icon: <SiApachespark />, color: "#E25A1C" },
  { name: "Airflow", icon: <SiApacheairflow />, color: "#007A88" },
  { name: "LangChain", icon: <SiLangchain />, color: "#00C2CB" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
];

// Responsive Grid
const SkillsContainerResponsive = styled(SkillsContainer)`
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 2.3rem;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 3rem;
  }
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Animates only once when appearing
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.div>
      </SectionHeader>
      <SkillsContainerResponsive
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Ensures animation runs only once on scroll-down
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 0.6 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <IconWrapper style={{ color: skill.color }}>
              {skill.icon}
            </IconWrapper>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsContainerResponsive>
    </SkillsSection>
  );
};

export default Skills;
