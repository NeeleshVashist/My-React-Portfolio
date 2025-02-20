import styled from "styled-components";
import PropTypes from "prop-types";

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.accent};
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 9999;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`;

const ThemeToggle = ({ toggleTheme }) => {
  return <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>;
};
ThemeToggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;
