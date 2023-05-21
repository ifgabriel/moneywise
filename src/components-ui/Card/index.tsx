import { Box } from 'native-base'
import { ViewProps } from 'react-native'

const Card = (props: ViewProps) => (
  <Box borderRadius={4} padding={4} backgroundColor='dark-100' minW='100%'  {...props} />
)

export default Card
