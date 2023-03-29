import { View, Button } from 'react-native'

import Text from '../Text'
import styles from './styles.module.scss'

interface CardProps {
  name: string
}

const Header = ({ name }: CardProps) => (
  <View style={styles.Header}>
    <Text size='giant' color='white'>
      Hello,{' '}
      <Text size='giant' color='white' weight='bold'>
        {name}!
      </Text>
    </Text>
  </View>
)

export default Header
