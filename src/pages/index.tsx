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
  const { centeredRow, centeredColumn, column, columnReverse, rounded, lightRounded, noBorder } = stylesUtils

  return (
    <>
      <Box tag='main' styles={{ 
        backgroundImg: homeBackground, backgroundSize: 'cover', width: '100vw', 
        height: '100vh', ...centeredRow
      }}>
        <Box styles={{ 
          backgroundColor: primaryColors['900'], ...rounded, width: '600px', 
          height: '300px', padding: '2.5rem', display: 'flex',
          lgStyle: { height: '250px', width: '450px' },
          mdStyle: { height: '200px' },
          smStyle: { height: '350px', width: '380px', ...columnReverse, padding: '3.5rem' },
          xsStyle: { width: '95%', padding: '2rem' },
        }}>
          <Box styles={{ paddingTop: '.75rem', paddingRight: '2.5rem', width: '65%', height: '100%', ...column,
            smStyle: { width: '100%', paddingTop: '1.5rem', paddingRight: '0' }, 
          }}>
            <Box styles={{ width: '100%', height: '45%', ...column }}>
              <Title tag='h1' text='Good to see you here!' styles={{ color: neutralColors['000'] }}/>
              <Title tag='h3' text='Welcome to my chat application' styles={{ color: primaryColors['200'] }}/>
            </Box>

            <Box styles={{ width: '100%', height: '55%', ...centeredColumn }}>
              <Input placeholder='my.username' styles={{ 
                outline: 'none', padding: '1rem', width: '100%', ...lightRounded, 
                ...noBorder, fontSize: '1.8rem'
              }}/>
              <Button text="LOGIN" styles={{ 
                width: '100%', marginTop: '.5rem', padding: '1rem', backgroundColor: primaryColors['400'], ...noBorder, 
                ...lightRounded, color: neutralColors['000'], cursor: 'pointer', fontWeight: 'bold',
                fontSize: '1.6rem',
                hover: { backgroundColor: primaryColors['600'] }, 
              }}/>
            </Box>
          </Box>

          <Box styles={{ 
            width: '35%', height: '100%', ...centeredColumn, paddingLeft: '2.5rem',
            borderLeft: `solid .2rem ${primaryColors['400']}`,
            smStyle: { width: '100%', paddingLeft: '0', borderLeft: '0', borderBottom: `solid .3rem ${primaryColors['400']}`, },
          }}>
            <Title styles={{ color: primaryColors['400'], width: '100%' }} 
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