import { ScrollView, SafeAreaView, StatusBar } from 'react-native'

import { Dashboard } from './src/pages'
import { Header } from './src/components-ui'

import styles from './styles.module.scss'

const App = () => (
  <SafeAreaView style={styles.SafeArea}>
    <StatusBar />
    <ScrollView style={styles.Container}>
      <Header name='Gabriel' />
      <Dashboard />
    </ScrollView>
  </SafeAreaView>
)

export default App
