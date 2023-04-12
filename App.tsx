import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScrollView, SafeAreaView, StatusBar, View } from 'react-native'

import { Dashboard } from './src/pages'
import { Header } from './src/components-ui'

import styles from './styles.module.scss'

import { ThemeProvider, createTheme } from '@rneui/themed'

const theme = createTheme({
  lightColors: {
    'primary-100': '#FF7955',
    'primary-200': '#FEA97B',
    'secondary-100': '#fc8260',
    'tertiary-100': '#faa375',
    'gray-100': '#9B9B9B',
    'dark-100': '#262626',
    'dark-200': '#303030',
    dark: '#292D32',
    white: '#FFFFFF',
    green: '#2ae678',
    red: '#e62a2a',
  },
  mode: 'light',
})

const App = () => (
  <ThemeProvider theme={theme}>
    <SafeAreaProvider>
      <SafeAreaView style={styles.SafeArea}>
        <StatusBar />
        <ScrollView style={styles.Container}>
          <Header name='Gabriel' />
          <View style={styles.Content}>
            <Dashboard />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  </ThemeProvider>
)

export default App
