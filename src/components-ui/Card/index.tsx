import { ViewProps } from 'react-native'
import { Box } from 'native-base'

const Card = (props: ViewProps) => (
  <Box padding={4} backgroundColor='dark-100' minW='100%'  {...props} />
)

export default Card
