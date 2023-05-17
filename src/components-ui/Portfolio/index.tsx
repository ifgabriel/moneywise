import { ImageBackground } from 'react-native'
import { Text, Box } from 'native-base'

import styles from './styles.module.scss'
import { formatCurrency } from '../../utils'

interface PortfolioProps {
  name: string,
  value: string,
  order: string,
  percent: string
}

const getBackground = (order: string) => {
  const orders: Record<string, unknown> = {
    first: require('../../../assets/background-first-card.png'),
    second: require('../../../assets/background-second-card.png'),
    third: require('../../../assets/background-third-card.png'),
    fourth: require('../../../assets/background-fourth-card.png'),
    fifth: require('../../../assets/background-fifth-card.png'),
  }

  return orders[order] ?? require('../../../assets/background-first-card.png')
}

const Portfolio = ({
  name,
  value,
  order,
  percent,
}: PortfolioProps) => (
  <Box style={[styles.Portfolio]}>
    <ImageBackground
      source={getBackground(order)}
      style={{ width: '100%', height: '100%' }}
    >
      <Box padding='24px' style={styles.Shadow}>
        <Box style={styles.Flex}>
          <Box style={styles.Image}>
            <Text fontSize='md' color='white'>
              IMAGE
            </Text>
          </Box>
          <Box>
            <Text fontSize='2xl' color='white'>
              {name}
            </Text>
          </Box>
        </Box>
        <Box style={styles.Values}>
          <Text fontSize='xl' color='white'>
            {formatCurrency(value)}
          </Text>
          <Text fontSize='lg' color='white'>
            {percent}
          </Text>
        </Box>
      </Box>
    </ImageBackground>
  </Box>
)

export default Portfolio
