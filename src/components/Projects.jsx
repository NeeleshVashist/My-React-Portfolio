import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SectionHeader from "../styles/SectionHeader";
import Modal from "./Modal"; // Import Modal component

// Main Section Styling
const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10%;
  background: ${({ theme }) => theme.background};
`;

// Projects Container Styling
const ProjectsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 2rem 0;
`;

// Project Card Styling
const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.glassBg};
  padding: 25px;
  border-radius: 20px;
  backdrop-filter: blur(12px);
  width: 350px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  position: relative;
  box-shadow: ${({ theme }) => theme.box_shadow};
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.hover_boxShadow};
    background: ${({ theme }) => theme.hoverGlassBg};
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primaryText};
    margin-bottom: 15px;
    text-align: center;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }

  p {
    opacity: 0.8;
    margin-bottom: 15px;
    font-size: 1rem;
    color: ${({ theme }) => theme.secondaryText};
    text-align: center;
  }

  .project-links {
    display: flex;
    gap: 15px;
    margin-top: 15px;
    justify-content: center;

    a,
    button {
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
    }
  }
`;

const projects = [
  {
    title: "AI Chatbot",
    description: "A real-time chatbot using NLP models.",
    github: "https://github.com/yourusername/chatbot",
    knowMore: "AI Chatbot Details",
    details:
      "This project involves building an AI chatbot with NLP models. It uses TensorFlow and Python for real-time user interaction and NLP model inference. Features include sentiment analysis and conversational AI functionalities.",
    skills: ["Python", "TensorFlow", "NLP", "Deep Learning"], // Add relevant skills
  },
  {
    title: "Machine Learning App",
    description: "A predictive app using regression models.",
    github: "https://github.com/yourusername/ml-app",
    knowMore: "ML App Details",
    details:
      "This app uses regression models to predict future trends. The backend is built with Python and Flask, while the frontend leverages React. Features include real-time data analysis and model predictions.",
    skills: ["Python", "Flask", "React", "Machine Learning"], // Add relevant skills
  },
  {
    title: "Weather Forecast App",
    description: "An app that provides real-time weather forecasts.",
    github: "https://github.com/yourusername/weather-app",
    knowMore: "Weather App Details",
    details:
      "This weather app fetches data from an external API and provides real-time weather forecasts. Built using React and Node.js, it supports geolocation and displays weather data on a sleek, interactive interface.",
    skills: ["React", "Node.js", "API Integration", "JavaScript"], // Add relevant skills
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalDetails, setModalDetails] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [skills, setSkills] = useState([]);

  const openModal = (project) => {
    setModalContent(project.knowMore);
    setModalDetails(project.details);
    setGithubLink(project.github);
    setSkills(project.skills); // Adding skills specific to each project
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
    setModalDetails("");
    setGithubLink("");
    setSkills([]);
  };

  return (
    <ProjectsSection id="projects">
      <SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Animates only once when appearing
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.div>
      </SectionHeader>
      <ProjectsContainer
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
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <button onClick={() => openModal(project)}>Know More</button>
            </div>
          </ProjectCard>
        ))}
      </ProjectsContainer>

      {/* Pass the state to the Modal component */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        projectDetails={{ title: modalContent, details: modalDetails }}
        githubLink={githubLink}
        skills={skills}
      />
    </ProjectsSection>
  );
};

export default Projects;
