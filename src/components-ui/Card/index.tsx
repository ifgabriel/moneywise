import { View, ViewProps } from 'react-native'
import { getClassesStyle } from 'src/utils'
import styles from './styles.module.scss'

interface CardProps extends ViewProps {
  className?: string,
}

const Card = ({style, ...props}: CardProps) => (
  <View style={[styles.Card, style]} {...props} />
)

export default Card
