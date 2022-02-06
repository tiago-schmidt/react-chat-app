import React from "react"
import CommonProps from "./model/CommonProps"
import { renderStyle } from "./renderStyle"
import appConfig from "../../config.json"

interface ImageProps extends CommonProps {
  src?: string
  alt?: string
}

const Image: React.FC<ImageProps> = ({ src, alt, styles }) => {
	return (
		<>
			<img src={src} alt={alt} ></img>
			<style jsx>{`
        img {
          ${renderStyle(styles)};
        }
      `}</style>
		</>
	)
}

Image.defaultProps = {
  src: `${appConfig.theme.images.placeholder}/300`,
  alt: '',
  styles: {},
}

export default Image