import React from "react"
import CommonProps from "./model/CommonProps";
import { renderStyle } from "./renderStyle";

interface InputProps extends CommonProps {
  placeholder?: string;
  type?: 'checkbox' | 'date' | 'email' | 'number' | 'password' | 'tel' | 'text'
  value?: string
}

const Input: React.FC<InputProps> = ({ styles, placeholder, type, value }) => {
  const inputType = type || 'text'
  const inputPlaceholder = placeholder || ''
  
  return (
    <>
      <input placeholder={inputPlaceholder} type={inputType} value={value}></input>
      <style jsx>{`
        input {
          ${renderStyle(styles)};
        }
      `}</style>
    </>
  );
}

Input.defaultProps = {
  styles: {},
}

export default Input