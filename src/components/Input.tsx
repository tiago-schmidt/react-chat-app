import React from "react"
import CommonProps from "./model/CommonProps";
import { renderStyle } from "./renderStyle";

interface InputProps extends CommonProps {
  placeholder?: string;
  type?: 'checkbox' | 'date' | 'email' | 'number' | 'password' | 'tel' | 'text'
  value?: string
  maxLength?: number
  onChange?: any
}

const Input: React.FC<InputProps> = ({ styles, placeholder, type, value, maxLength, onChange }) => {
  return (
    <>
      <input 
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder} 
        type={type} 
        value={value}
        maxLength={maxLength}
      ></input>
      <style jsx>{`
        input {
          ${renderStyle(styles)};
        }
      `}</style>
    </>
  );
}

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  styles: {},
}

export default Input