import GlobalStyle from "../components/GlobalStyle"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle/>
    </>
  )
}
export default MyApp