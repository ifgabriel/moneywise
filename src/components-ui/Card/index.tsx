import { View, ViewProps } from 'react-native'
import styles from './styles.module.scss'

const Card = (props: ViewProps) => (
  <View style={styles.Card} {...props} />
)

export default Card
