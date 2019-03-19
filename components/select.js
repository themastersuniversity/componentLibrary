import React from "react";
import styled from "styled-components";

const Select = ({ onChange, options, label, value, className }) => (
  <div className={className}>
    <label htmlFor={label}>{label}</label>
    <select
      name={label}
      onChange={event => onChange(event.target.value)}
      value={value}
      aria-label={label}
    >
      {options.map((option, i) => (
        <option value={option} key={i + option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const StyledSelect = styled(Select)`
  label {
    margin-bottom: 10px;
    display: block;
  }
  select {
    width: 90%;
    height: 40px;
    margin: 5px 5px;
    font-size: 1rem;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
    border: none;
    background: #eee;
  }
`;

export default StyledSelect;
