import { View, ViewProps } from 'react-native'
import { CheckIcon, Input, Select } from 'native-base'

import styles from './styles.module.scss'

interface CardProps extends ViewProps {
  className?: string
}

const Card = ({ style, ...props }: CardProps) => (
  <View style={[styles.Card, style]} {...props}>
    <Input mx='3' placeholder='Input' w='100%' />
    <Select
      minWidth='200'
      accessibilityLabel='Choose Service'
      placeholder='Choose Service'
      _selectedItem={{
        bg: 'teal.600',
        endIcon: <CheckIcon size='5' />,
      }}
      mt={1}
    >
      <Select.Item label='UX Research' value='ux' />
      <Select.Item label='Web Development' value='web' />
      <Select.Item label='Cross Platform Development' value='cross' />
      <Select.Item label='UI Designing' value='ui' />
      <Select.Item label='Backend Development' value='backend' />
    </Select>
  </View>
)

export default Card
