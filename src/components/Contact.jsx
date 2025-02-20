import styled from "styled-components";
import { motion } from "framer-motion";
import SectionHeader from "../styles/SectionHeader";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

// Styled components
const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10%;
  text-align: center;

  @media (max-width: 800px) {
    padding: 4rem 5%;
  }
`;

const ContactContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.glassBg};
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  box-shadow: ${({ theme }) => theme.box_shadow};
  max-width: 1100px;
  width: 100%;
  opacity: 0;
  transform: translateY(50px);

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const Divider = styled.div`
  width: 2px;
  background: ${({ theme }) => theme.divider};
  min-height: 500px; /* Ensure the divider has a visible height */
  margin: 0 2rem;

  @media (max-width: 800px) {
    width: 100%;
    height: 2px;
    min-height: unset;
    margin: 2rem 0;
  }
`;

// Left Side (Social Links)
const ContactLeft = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 800px) {
    text-align: center;
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const ContactHeading = styled(motion.h2)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 1.2rem;
  text-align: center;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.primaryText};
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: scale(1.15);
  }
`;

const DownloadResumeButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 50px;
  background: ${({ theme }) => theme.button_bg};
  color: ${({ theme }) => theme.button_text};
  border: 2px solid ${({ theme }) => theme.button_border};
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.button_hover_bg};
    box-shadow: ${({ theme }) => theme.hover_boxShadow};
    color: ${({ theme }) => theme.button_hover_text};
    border-color: ${({ theme }) => theme.button_hover_border};
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

// Right Side (Contact Form)
const ContactRight = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 800px) {
    text-align: center;
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  background: ${({ theme }) => theme.input_bg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease-in-out;

  &:focus {
    box-shadow: 0 0 10px rgba(0, 113, 227, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  background: ${({ theme }) => theme.input_bg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  resize: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    box-shadow: 0 0 10px rgba(0, 113, 227, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  border: ${({ theme }) => `2px solid ${theme.accent}`};
  border-radius: 50px;
  background: ${({ theme }) => theme.glassBg};
  color: ${({ theme }) => theme.accent};
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  padding: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.hover_boxShadow};
  }

  &:active {
    transform: scale(0.98);
  }
`;

// Email Function
const openEmail = () => {
  const recipient = "your.email@example.com"; // Change to your email
  const subject = encodeURIComponent("Interested in Connecting with You!");
  const body = encodeURIComponent(
    "Hi Neelesh,\n\nI came across your portfolio and was really impressed! I'd love to discuss potential opportunities to work together.\n\nLooking forward to hearing from you!\n\nBest regards,\n[Your Name]"
  );

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
};

const Contact = () => {
  const [message, setMessage] = useState("");

  // For mobile devices: Show a button to fill message
  const handleTabOrMobile = (e) => {
    if (e.key === "Tab" || e.type === "click") {
      e.preventDefault();
      setMessage(
        "Hi Neelesh,\n\nI came across your portfolio and was really impressed! I'd love to discuss potential opportunities to work together.\n\nLooking forward to hearing from you!\n\nBest regards,\n[Your Name]"
      );
    }
  };

  useEffect(() => {
    // Add event listener for the Tab key on desktop
    const handleTabPress = (e) => {
      if (e.key === "Tab") {
        handleTabOrMobile(e);
      }
    };

    // TextArea focus handling for desktop Tab
    const textArea = document.querySelector("textarea");
    if (textArea) {
      textArea.addEventListener("keydown", handleTabPress);
    }

    return () => {
      if (textArea) {
        textArea.removeEventListener("keydown", handleTabPress);
      }
    };
  }, []);

  return (
    <ContactSection id="contact">
      <SectionHeader>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let&apos;s Connect!
        </motion.p>
      </SectionHeader>

      <ContactContainer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side: Social Links */}
        <ContactLeft>
          <ContactHeading>Connect With Me 🤝</ContactHeading>
          <ContactText>
            Let&apos;s collaborate on something amazing! Feel free to reach out
            via social media.
          </ContactText>

          <SocialLinks>
            <SocialIcon
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://github.com/yourgithub" target="_blank">
              <FaGithub />
            </SocialIcon>
            <SocialIcon onClick={openEmail} style={{ cursor: "pointer" }}>
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>

          {/* Download Resume Button */}
          <DownloadResumeButton
            href="#" // Add your resume file path here
            download
          >
            Download Resume
          </DownloadResumeButton>
        </ContactLeft>

        {/* Divider */}
        <Divider />

        {/* Right Side: Contact Form */}
        <ContactRight>
          <ContactHeading>Send Me a Message</ContactHeading>
          <Form autoComplete="on">
            <Input
              type="text"
              placeholder="Your Name"
              id="name"
              name="name"
              autoComplete="name"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
            <TextArea
              id="message"
              name="message"
              rows="8"
              placeholder="Press Tab to auto-fill a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
              required
            ></TextArea>
            {/* Button for mobile users to fill the message */}
            <SubmitButton
              onClick={handleTabOrMobile}
              whileHover={{ scale: 1.05 }}
            >
              Fill Message
            </SubmitButton>
            <SubmitButton whileHover={{ scale: 1.05 }}>Send</SubmitButton>
          </Form>
        </ContactRight>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
