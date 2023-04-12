import { View } from 'react-native'
import { Bell } from 'lucide-react-native'
import { Button, useTheme } from '@rneui/themed'

import Text from '../Text'
import styles from './styles.module.scss'

interface CardProps {
  name: string
}

const Header = ({ name }: CardProps) => {
  const { theme } = useTheme()

  return (
    <View style={styles.Header}>
      <Text size='giant' color='white'>
        Hello,{' '}
        <Text size='giant' color='white' weight='bold'>
          {name}!
        </Text>
      </Text>
      <Button radius='xl' color={theme.colors['primary-100']}>
        <Bell color={theme.colors['dark-100']} />
      </Button>
    </View>
  )
}
export default Header
