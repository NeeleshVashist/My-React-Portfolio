// GoToTopButton.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: ${({ theme }) => theme.accent};
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.button_text};
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.box_shadow};
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  z-index: 9999;

  &:hover {
    background: ${({ theme }) => theme.button_hover_bg};
    backdrop-filter: blur(15px);
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.hover_boxShadow};
  }

  @media (max-width: 768px) {
    background: ${({ theme }) => theme.glassBg};
    color: ${({ theme }) => theme.accent};
    border: 2px solid ${({ theme }) => theme.accent};
    backdrop-filter: blur(1px);
    width: 60px;
    height: 60px;
  }
`;

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <Button $visible={isVisible} onClick={scrollToTop}>
      ↑
    </Button>
  );
};

export default GoToTopButton;
