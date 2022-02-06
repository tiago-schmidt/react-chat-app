import appConfig from "../../config.json"
import * as stylesUtils from '../utils/styles/stylesUtils'
import Box from "../components/Box"

const Chat = () => {
  const { homeBackground } = appConfig.theme.images
  const { centeredRow } = stylesUtils

  return (
    <>
      <Box tag='main' styles={{ 
        backgroundImg: homeBackground, backgroundSize: 'cover', width: '100vw', 
        height: '100vh', ...centeredRow
      }}>
        
      </Box>
    </>
  )
}

export default Chat