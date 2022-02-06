import React from "react"
import CommonProps from "./model/CommonProps";
import { renderStyle } from "./renderStyle";

interface TitleProps extends CommonProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text: string
}

const Title: React.FC<TitleProps> = ({ tag: Tag, text, styles }) => {
	return (
		<>
			<Tag>{text}</Tag>
			<style jsx>{`
        ${`${Tag}`} {
          ${renderStyle(styles)};
        }
      `}</style>
		</>
	)
}

Title.defaultProps = {
  tag: 'h1',
  text: 'Title',
  styles: {},
}

export default Title