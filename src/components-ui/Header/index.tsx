import { Heading, Box } from 'native-base'

const Header = () => (
  <Box paddingY={8}>
    <Heading fontSize='2xl' color='white'>
      Hello,{' '}
      <Heading fontSize='3xl' color='primary-100'>
       Gabriel!
      </Heading>
    </Heading>
  </Box>
)

export default Header
