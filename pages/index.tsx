import Head from 'next/head'
import { Fragment } from 'react'
import Navbar from '../components/layout/navbar'
import Container from '../components/layout/container'
import { Box, Grid } from '@chakra-ui/layout'
import Sidebar from '../components/layout/sidebar' 
import Posts from '../components/feed/posts'
import Listing from '../components/listing'

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Box as = "main" bg = "#EEF0F1" id = "page" mt = "55px">
        <Container>
          <Grid
            templateColumns = {{
              base: "1fr",
              md: "1fr 3fr",
              lg : "1fr 3fr 1.5fr"
            }}
            d = {{ base: "block", md: 'grid' }}
            gap = {4}
            pt = "4"
          >
            <Sidebar d={{ base: 'none', md: 'block' }} />
            <Posts />
            <Listing d={{ base: 'none', md: 'flex' }} />

          </Grid>
        </Container>
      </Box>
    </Fragment>
   
  )
}
