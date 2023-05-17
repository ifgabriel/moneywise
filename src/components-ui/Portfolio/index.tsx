import { Text, Box } from 'native-base'

import styles from './styles.module.scss'

interface PortfolioProps {
  name: string,
  value: string,
  percent: string
  abbreviations: string,
}

const Portfolio = ({
  name,
  abbreviations,
  value,
  percent,
}: PortfolioProps) => (
  <Box style={[styles.Portfolio, styles[abbreviations]]}>
    <Box style={styles.Image}>
      <Text fontSize='md' color='white'>
        IMAGE
      </Text>
    </Box>
    <Box style={styles.Type}>
      <Text fontSize='lg' color='white'>
        {name}
      </Text>
      <Text fontSize='lg' color='white'>
        ({abbreviations})
      </Text>
    </Box>
    <Box style={styles.Values}>
      <Text fontSize='xl' color='white'>
        R$ {value}
      </Text>
      <Text fontSize='lg' color='white'>
        {percent}
      </Text>
    </Box>
  </Box>
)

export default Portfolio
