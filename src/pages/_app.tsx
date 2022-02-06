import { SnackbarProvider } from "material-ui-snackbar-provider"
import GlobalStyle from "../components/GlobalStyle"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
        <Component {...pageProps} />
      </SnackbarProvider>
      <GlobalStyle/>
    </>
  )
}
export default MyApp