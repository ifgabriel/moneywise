import { StyleProp, ViewStyle } from "react-native/types"

const getClassesStyle = (...args: StyleProp<ViewStyle>[]): StyleProp<ViewStyle> => args.join('')

export default getClassesStyle