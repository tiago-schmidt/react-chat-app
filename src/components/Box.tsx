import React from "react"
import CommonProps from "./model/CommonProps";
import { renderStyle } from "./renderStyle";

interface BoxProps extends CommonProps {
  tag?: 'form' | 'div' | 'ul' | 'main' | 'section' | 'article' | 'header' | 'footer' | 'nav'
}

const Box: React.FC<BoxProps> = ({ tag, styles, children }) => {
  const Tag = tag || 'div'
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${`${Tag}`} {
          ${renderStyle(styles)};
        }
      `}</style>
    </>
  );
}

Box.defaultProps = {
  tag: 'div',
  styles: {},
}

export default Box