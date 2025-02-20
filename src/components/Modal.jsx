import styled from "styled-components";
import PropTypes from "prop-types";

// Modal Overlay Styling
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.modalOverlay}; /* Light/dark mode */
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  transition: background 0.3s ease;
`;

// Modal Content Styling
const ModalContent = styled.div`
  background: ${({ theme }) => theme.glassBg};
  border: 1px solid ${({ theme }) => theme.glassBorder};
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(50px);
  max-width: 80%;
  width: 600px;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.box_shadow};
  position: relative;
  transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
`;

// Close Button Styling (Apple-style)
const CloseButton = styled.button`
  position: absolute;
  top: 10px; /* Adjusted for better alignment */
  right: 10px;
  width: 20px; /* Reduced size for a smaller button */
  height: 20px; /* Keeping it circular */
  background-color: ${({ theme }) => theme.button_bg}; /* Apple-style red */
  color: ${({ theme }) => theme.button_text};
  border-radius: 50%; /* Perfect circle */
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px; /* Reduced font size for a compact X */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.button_hover_bg};
    color: ${({ theme }) => theme.button_hover_text};
    transform: scale(1.1); /* Slight zoom effect */
  }

  &:focus {
    outline: none; /* Remove outline on focus */
  }
`;

// Project Title Styling
const ProjectTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.primaryText}; /* Title color based on theme */
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
`;

// Project Details Styling
const ProjectDetails = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText}; /* Text color based on theme */
  line-height: 1.5;
  margin-bottom: 10px;
  text-align: justify;
`;

// GitHub Button Styling
const GitHubButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background: ${({ theme }) => theme.button_bg};
  color: ${({ theme }) => theme.button_text};
  font-weight: 600;
  border-radius: 30px;
  text-decoration: none;
  text-align: center;
  width: 100%;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.button_hover_bg};
    color: ${({ theme }) => theme.button_hover_text};
    transform: translateY(-2px);
  }
`;

// Skill Badges Container and Badge Styling
const SkillsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const SkillBadge = styled.div`
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
`;

const Modal = ({ isOpen, closeModal, projectDetails, githubLink, skills }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <ProjectTitle>{projectDetails.title}</ProjectTitle>
        <ProjectDetails>{projectDetails.details}</ProjectDetails>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillBadge key={index}>{skill}</SkillBadge>
          ))}
        </SkillsContainer>
        <GitHubButton
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </GitHubButton>
      </ModalContent>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  projectDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
  githubLink: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Modal;
