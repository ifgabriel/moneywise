import { Text, TextProps } from 'react-native'

import styles from './styles.module.scss'

interface ComponentProps extends TextProps {
  size: 'small' | 'medium' | 'big' | 'giant'
  color: 'white' | 'gray' | 'primary'
  weight?: 'bold' | 'none'
}

const Card = ({ size, color, weight = 'none', ...props }: ComponentProps) => (
  <Text
    {...props}
    style={[
      styles.Text,
      styles[size],
      styles[color],
      styles[weight],
      props.style
    ]}
  />
)

export default Card
