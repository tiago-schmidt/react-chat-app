import React from "react"
import appConfig from "../../config.json"

const GlobalStyle = () => {
	return (
		<style global jsx>
			{`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					list-style: none;
				}
        .MuiSnackbarContent-message {
          font-size: 2rem;
        }
        html {
          /* Every 1rem is equivalent to 10px */
          font-size: 62.5%;
        }
				body {
					font-family: 'Bungee', sans-serif;
				}
				/* App fit Height */ 
				html, body, #__next {
					min-height: 100vh;
					display: flex;
					flex: 1;
				}
				#__next {
					flex: 1;
				}
				#__next > * {
					flex: 1;
				}
        @media screen and (max-width: ${appConfig.breakpoints.lg}) {
          html {
            font-size: 57.5%;
          }
        }
        @media screen and (max-width: ${appConfig.breakpoints.md}) {
          html {
            font-size: 52.5%;
          }
        }
        @media screen and (max-width: ${appConfig.breakpoints.sm}) {
          html {
            font-size: 47.5%;
          }
        }
			`}
		</style>
	)
}

export default GlobalStyle