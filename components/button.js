import React from "react";
import styled from "styled-components";

const Button = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

const StyledButton = styled(Button)`
  background: ${props => (props.bgcolor ? props.bgcolor : "#0c2340")};
  color: ${props => (props.color ? props.color : "#fff")};
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 20px;
  margin: 10px 0;
  box-sizing: border-box;
  line-height: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 13px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }
`;

export default StyledButton;
