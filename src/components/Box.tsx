import React from "react"
import CommonProps from "./model/CommonProps";
import { renderStyle } from "./renderStyle";
import appConfig from "../../config.json"

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
          ${styles ? renderStyle(styles) : ''};
        }
        @media screen and (max-width: ${appConfig.breakpoints.lg}) {
          ${`${Tag}`} {
            ${styles.lgStyle ? renderStyle(styles.lgStyle) : ''};
          }
        }
        @media screen and (max-width: ${appConfig.breakpoints.md}) {
          ${`${Tag}`} {
            ${styles.mdStyle ? renderStyle(styles.mdStyle) : ''};
          }
        }
        @media screen and (max-width: ${appConfig.breakpoints.sm}) {
          ${`${Tag}`} {
            ${styles.smStyle ? renderStyle(styles.smStyle) : ''};
          }
        }
        @media screen and (max-width: ${appConfig.breakpoints.xs}) {
          ${`${Tag}`} {
            ${styles.xsStyle ? renderStyle(styles.xsStyle) : ''};
          }
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