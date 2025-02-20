import styled from "styled-components";

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.primaryTextColor};
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #ff7e5f, #feb47b);
    border-radius: 5px;
  }
`;

export default SectionHeader;
