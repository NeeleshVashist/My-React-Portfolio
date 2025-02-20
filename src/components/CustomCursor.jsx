import { useEffect, useState } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  position: fixed;
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.cursorColor};
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-out;
  z-index: 9999;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <Cursor style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default CustomCursor;