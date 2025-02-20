import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Nunito', 'Inter', 'SF Pro Display', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in-out;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  /* Advanced Gradient */
  .gradient-background {
    background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
  }

  /* Section Background Patterns */
  .section-background {
    background-image: url('/path-to-pattern.png'); /* Replace with your pattern image URL */
    background-size: cover;
    background-position: center;
  }
  
  /* Glassmorphism */
  .glassmorphism {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  /* Neumorphism */
  .neumorphism {
    background: ${({ theme }) => theme.body};
    border-radius: 10px;
    box-shadow:  8px 8px 15px rgba(0, 0, 0, 0.2), -8px -8px 15px rgba(255, 255, 255, 0.7);
  }
  
`;
