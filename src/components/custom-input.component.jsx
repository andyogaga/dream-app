import React from "react";
import { string, bool, func } from "prop-types";
import styled from "styled-components";
import { PRI_COLOR, PRI_COLOR_FADED } from "../utils/constants";

const TextInput = styled["input"]`
  height: 3rem;
  width: 87%;
  margin: 0.5rem;
  border-radius: 10px;
  border: 1px solid ${PRI_COLOR};
  font-color: ${PRI_COLOR};
  font-size: 1.5rem;
  padding: 0.5rem;
  padding-left: 2rem;
  background-color: #fff;

  &:hover {
    box-shadow: 0 0 0.8rem 0.1rem ${PRI_COLOR_FADED};
  }
`;

const TextInputMultiline = styled["textarea"]`
  width: 87%;
  margin: 0.5rem;
  border-radius: 10px;
  border: 1px solid ${PRI_COLOR};
  font-color: ${PRI_COLOR};
  font-size: 1.5rem;
  padding: 0.5rem;
  padding-left: 2rem;
  background-color: #fff;

  &:hover {
    box-shadow: 0 0 0.8rem 0.1rem ${PRI_COLOR_FADED};
  }
`;

export const CustomInput = ({
  name,
  error = "",
  customRef,
  label,
  value,
  multiline = false,
  type = "text",
  disabled = false,
  placeholder,
  style = {},
}) => {
  return (
    <div
      style={{
        marginTop: "1.3rem",
      }}
    >
      <label htmlFor={label}>{label}</label>
      {multiline ? (
        <TextInputMultiline
          name={name}
          disabled={disabled}
          autoComplete=""
          color="primary"
          ref={customRef}
          type={type}
          rows="10"
          cols="30"
          placeholder={placeholder}
          value={value}
          style={{ height: multiline ? "6rem" : "3rem", ...style }}
        />
      ) : (
        <TextInput
          name={name}
          disabled={disabled}
          autoComplete=""
          color="primary"
          ref={customRef}
          type={type}
          placeholder={placeholder}
          value={value}
          style={{ height: multiline ? "6rem" : "3rem", ...style }}
        />
      )}

      {error && (
        <p
          style={{
            color: "red",
            margin: "0px",
            marginLeft: "1rem",
          }}
          id={`${name}-component-error-text`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  name: string,
  disabled: bool,
  type: string,
  error: string,
  placeholder: string,
  customRef: func,
  value: string,
  multiline: bool,
};

export default CustomInput;
