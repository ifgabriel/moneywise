import { View } from 'react-native'
import { Bell } from 'lucide-react-native'
import { Button } from '@rneui/themed'

import Text from '../Text'
import styles from './styles.module.scss'

interface CardProps {
  name: string
}

const Header = ({ name }: CardProps) => {

  return (
    <View style={styles.Header}>
      <Text size='giant' color='white'>
        Olá,{' '}
        <Text size='giant' color='white' weight='bold'>
          {name}!
        </Text>
      </Text>
      <Button radius='xl' >
        <Bell />
      </Button>
    </View>
  )
}
export default Header
