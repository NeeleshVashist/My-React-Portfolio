import styled from "styled-components";
import { motion } from "framer-motion";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.footerBg || "rgba(255, 255, 255, 0.08)"};
  backdrop-filter: blur(20px);
  padding: 40px 0;
  text-align: center;
  color: ${({ theme }) => theme.text};
  position: relative;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  border-top: 1px solid
    ${({ theme }) => theme.footerBorder || "rgba(255,255,255,0.2)"};
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const FooterLinks = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 40px;
//   margin-bottom: 15px;

//   @media (max-width: 600px) {
//     flex-direction: column;
//     gap: 10px;
//   }
// `;

// const FooterLink = styled(motion.a)`
//   font-size: 1rem;
//   color: ${({ theme }) => theme.text};
//   cursor: pointer;
//   transition: color 0.3s ease, transform 0.3s ease;
//   font-weight: 500;
//   text-decoration: none;

//   &:hover {
//     color: ${({ theme }) => theme.accent};
//     transform: translateY(-3px);
//   }
// `;

// Styled button for email (so it aligns perfectly with other links)
// const EmailButton = styled(motion.button)`
//   background: none;
//   border: none;
//   font-size: 1rem;
//   color: ${({ theme }) => theme.text};
//   cursor: pointer;
//   transition: color 0.3s ease, transform 0.3s ease;
//   font-weight: 500;
//   padding: 0;
//   text-decoration: none;

//   &:hover {
//     color: ${({ theme }) => theme.accent};
//     transform: translateY(-3px);
//   }
// `;

const FooterText = styled(motion.div)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondaryText};
  opacity: 0.8;
  margin-top: 10px;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const CopyrightText = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.secondaryText};
  opacity: 0.6;
  margin-top: 8px;
`;

// const openPreWrittenEmail = () => {
//   const recipient = "myemail@example.com";
//   const subject = encodeURIComponent("Let's Connect! 🚀");
//   const body = encodeURIComponent(
//     `Hi Neelesh,\n\nI came across your portfolio and was really impressed!\nLet's connect.\n\nBest regards,\n[Your Name]`
//   );

//   window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
// };

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* <FooterLinks>
          <FooterLink
            href="https://github.com/myusername"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </FooterLink>
          <FooterLink
            href="https://linkedin.com/in/myusername"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </FooterLink>
          <EmailButton
            onClick={openPreWrittenEmail}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Email
          </EmailButton>
        </FooterLinks> */}
        <FooterText>Designed & Developed by Neelesh</FooterText>
        <CopyrightText>
          &copy; {new Date().getFullYear()} Neelesh. All Rights Reserved.
        </CopyrightText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
