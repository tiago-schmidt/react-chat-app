import React from "react"
import CommonProps from "./model/CommonProps";
import { renderStyle } from "./renderStyle";

interface ButtonProps extends CommonProps {
  text?: string
  type?: 'button' | 'submit'
  value?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ styles, text, type, value, disabled }) => {
  return (
    <>
      <button type={type} value={value} disabled={disabled}>
        {text}
      </button>
      <style jsx>{`
        button {
          ${renderStyle(styles)};
        }
        button:hover {
          ${styles.hover ? renderStyle(styles.hover) : ''};
        }
        button:active {
          ${styles.active ? renderStyle(styles.active) : ''};
        }
      `}</style>
    </>
  );
}

Button.defaultProps = {
  text: 'Clique',
  disabled: false,
  type: 'button',
  styles: {},
}

export default Button