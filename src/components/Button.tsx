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
  const btnType = type || 'button'
  const btnText = text || 'Clique'
  const btnDisabled = disabled || false

  return (
    <>
      <button type={btnType} value={value} disabled={btnDisabled}>
        {btnText}
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
  styles: {},
}

export default Button