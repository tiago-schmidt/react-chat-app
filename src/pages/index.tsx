import Title from "../components/Title"
import GlobalStyle from "../components/GlobalStyle"
import appConfig from "../../config.json"
import Box from "../components/Box"
import * as stylesUtils from '../utils/styles/stylesUtils'
import Input from "../components/Input"
import Button from "../components/Button"

const HomePage = () => {
  const { neutrals: neutralColors, primary: primaryColors } = appConfig.theme.colors
  const { homeBackground } = appConfig.theme.images
  const { centeredRow, centeredColumn, column, rounded, lightRounded, noBorder } = stylesUtils

  return (
    <>
      <Box tag='main' styles={{ 
        backgroundImg: homeBackground, backgroundSize: 'cover', width: '100vw', 
        height: '100vh', ...centeredRow
      }}>
        <Box styles={{ 
          backgroundColor: primaryColors['900'], ...rounded, width: 'clamp(250px, 40%, 40%)', 
          height: 'clamp(300px, 30%, 30%)', padding: '2rem', display: 'flex'
        }}>
          <Box styles={{ paddingTop: '.5rem', paddingRight: '2rem', width: '65%', height: '100%', ...column }}>
            <Box styles={{ width: '100%', height: '45%', ...column }}>
              <Title tag='h1' text='Good to see you here!' styles={{ color: neutralColors['000'] }}/>
              <Title tag='h4' text='Welcome to my chat application' styles={{ color: primaryColors['200'] }}/>
            </Box>

            <Box styles={{ width: '100%', height: '55%', ...centeredColumn }}>
              <Input placeholder='my.username' styles={{ 
                outline: 'none', padding: '.75rem', width: '100%', ...lightRounded, 
                ...noBorder, fontSize: '18px'
              }}/>
              <Button text="LOGIN" styles={{ 
                width: '100%', marginTop: '.3rem', padding: '.75rem', backgroundColor: primaryColors['400'], ...noBorder, 
                ...lightRounded, color: neutralColors['000'], cursor: 'pointer', fontWeight: 'bold',
                fontSize: '16px',
                hover: { backgroundColor: primaryColors['600'] }, 
                active: { padding: '.6rem', marginTop: '.6rem', width: '102%' }
              }}/>
            </Box>
          </Box>

          <Box styles={{ 
            width: '35%', height: '100%', ...centeredColumn,
            borderLeft: `solid 1px ${primaryColors['400']}`
          }}>
            <Title styles={{ color: primaryColors['400'], width: '100%', paddingLeft: '2rem' }} 
              text='This is just a template text, ignore it or imagine here some badass motivational text' tag='h2'>
            </Title>
          </Box>
        </Box>
      </Box>
      <GlobalStyle/>
    </>
	)
}

export default HomePage