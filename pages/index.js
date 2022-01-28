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
				body {
					font-family: 'Open Sans', sans-serif;
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
			`}
		</style>
	)
}

const Title = ({ tag: TagProps, text }) => {
	return (
		<>
			<TagProps>{text}</TagProps>
			<style jsx>
				{`
					${TagProps} {
						color: white;
					}
				`}
			</style>
		</>
	)
}

const HomePage = () => {
    return (
		<div>
			<GlobalStyle/>
			<Title tag="h1" text="Good to see you here!"/>
			<h4>Welcome to my chat application</h4>
		</div>
	)
}

export default HomePage