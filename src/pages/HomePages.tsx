import Hero from '@/CustomComponents/Hero'
import { Offers } from '@/CustomComponents/Offer'
import SearchWidget from '@/CustomComponents/SearchWidget'
import TrendingDestinations from '@/CustomComponents/TrendingDestination'
import { Box } from '@chakra-ui/react'

const HomePages = () => {
  return (
    <>
      <Box minH={'100vh'} >
        <Hero />
        <SearchWidget />
        <Offers />
        <TrendingDestinations />
      </Box>
    </>
  )
}

export default HomePages

