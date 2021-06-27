import type { AppProps } from 'next/app'
import "@fontsource/inter"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {


  const theme = extendTheme({ 
    fonts: {
      heading: "Inter", 
      body: "Inter"
    }
   })
   
  return (

    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
