import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useSnackbar } from "material-ui-snackbar-provider"
import axios from "axios"

import appConfig from "../../config.json"
import * as stylesUtils from '../utils/styles/stylesUtils'
import * as errorMessages from '../utils/constants/errorMessages'
import { UserInfo } from "../components/model/UserInfo"
import Title from "../components/Title"
import Box from "../components/Box"
import Input from "../components/Input"
import Button from "../components/Button"
import Image from "../components/Image"

const HomePage = () => {
  const { neutrals: neutralColors, primary: primaryColors } = appConfig.theme.colors
  const { homeBackground, placeholder } = appConfig.theme.images
  const { centeredRow, centeredColumn, column, columnReverse, rounded, lightRounded, noBorder } = stylesUtils

  const [username, setUsername] = useState('')
  const [user, setUser] = useState<UserInfo>({})
  const [apiCallTimeout, setApiCallTimeout] = useState<NodeJS.Timeout>()

  const router = useRouter()
  const toaster = useSnackbar()

  useEffect(() => {
    clearTimeout(apiCallTimeout)
    setApiCallTimeout(setTimeout(() => { fetchGithubAPI(username) }, 1500))
  }, [username])

  const fetchGithubAPI = async (username: string) => {
    if(!username || username.length < 3) {
      setUser({})
      return
    }
    try {
      let response = await axios.get(`${appConfig.githubApi.url}/${username}`)
      setUser(response.data)
    }
    catch (e) {
      toaster.showMessage(`${errorMessages.BASIC}: Usuário "${username}"`)
      setUser({})
    }
  }

  const login = () => {
    if(!hasUser()) return

    router.push('chat')
  }

  const hasUser = () => {
    return username && user && user.login
  }

  return (
    <>
      <Box tag='main' styles={{ 
        backgroundImg: homeBackground, backgroundSize: 'cover', width: '100vw', 
        height: '100vh', ...centeredRow
      }}>
        <Box styles={{
          backgroundColor: primaryColors['900'], ...rounded, width: '600px', 
          height: '300px', padding: '2.5rem', paddingRight:'0', display: 'flex',
          lgStyle: { height: '250px', width: '450px' },
          mdStyle: { height: '200px' },
          smStyle: { height: '350px', width: '380px', ...columnReverse, padding: '2rem' },
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
              <Input onChange={setUsername} value={username} maxLength={30} styles={{ 
                outline: 'none', padding: '1rem', width: '100%', ...lightRounded, 
                ...noBorder, fontSize: '1.8rem'
              }}/>
              <Button onClick={login} disabled={!hasUser()} text="LOGIN" styles={{ 
                width: '100%', marginTop: '.5rem', padding: '1rem', backgroundColor: hasUser() ? primaryColors['500'] : neutralColors['500'], 
                ...noBorder, ...lightRounded, color: neutralColors['000'], cursor: !hasUser() ? 'default' : 'pointer', 
                fontWeight: 'bold', fontSize: '1.6rem', hover: hasUser() ? { backgroundColor: primaryColors['700'] } : {}, 
              }}/>
            </Box>
          </Box>

          <Box styles={{ 
            width: '35%', height: '100%', ...centeredColumn, paddingLeft: '1rem', paddingRight: '1rem',
            borderLeft: `solid .2rem ${primaryColors['400']}`, overflow: 'hidden',
            smStyle: { width: '100%', paddingTop: '0', borderLeft: '0', borderBottom: `solid .3rem ${primaryColors['400']}`, paddingBottom: '1.5rem' },
          }}>
            <Box styles={{ 
              overflow: 'hidden', width: '100%', borderRadius: '50%', border: `solid .5rem ${primaryColors['300']}`,
              lgStyle: { border: 'none' }, mdStyle: { width: '85%' }, smStyle: { width: '150px' }
            }}>
              <Image src={user && user.avatar_url ? user.avatar_url : `${placeholder}/180x180`} styles={{ width: '100%', height: '100%' }}></Image>
            </Box>
            <Title tag='h3' text={username} styles={{ 
              marginTop: '.5rem', width: '100%', height: '10px', color: neutralColors['100'], textAlign: 'center', wordBreak: 'break-all'
            }}/>
          </Box>
        </Box>
      </Box>
    </>
	)
}

export default HomePage