import { View, ViewProps } from 'react-native'

import Text from '../Text'
import styles from './styles.module.scss'

interface PortfolioProps {
  name: string,
  abbreviations: string,
  value: string,
  percent: string
}

const Portfolio = ({
  name,
  abbreviations,
  value,
  percent,
}: PortfolioProps) => (
  <View style={[styles.Portfolio, styles[abbreviations]]}>
    <View style={styles.Image}>
      <Text size='medium' color='white'>
        IMAGE
      </Text>
    </View>
    <View style={styles.Type}>
      <Text size='medium' color='white'>
        {name}
      </Text>
      <Text size='medium' color='white'>
        ({abbreviations})
      </Text>
    </View>
    <View style={styles.Values}>
      <Text size='giant' color='white'>
        R$ {value}
      </Text>
      <Text size='medium' color='white'>
        {percent}
      </Text>
    </View>
  </View>
)

export default Portfolio
