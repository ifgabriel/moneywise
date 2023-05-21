import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { Container, NativeBaseProvider, ScrollView, extendTheme } from 'native-base'
import { SafeAreaView } from 'react-native'
import { Header } from './src/components-ui'
import { Dashboard } from './src/pages'

const theme = extendTheme({
  colors: {
    'primary-100': '#FF7955',
    'primary-200': '#FEA97B',
    'secondary-100': '#fc8260',
    'tertiary-100': '#faa375',
    'gray-100': '#9B9B9B',
    'dark-000': '#1F1F1F',
    'dark-100': '#262626',
    'dark-200': '#303030',
    dark: '#292D32',
    white: '#FFFFFF',
    green: '#2ae678',
    red: '#e62a2a',
  },
  config: {
    initialColorMode: 'dark',
  },
})

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#1F1F1F' }}>
        <StatusBar style="light" backgroundColor="#1F1F1F" />
        <ScrollView>
          <Container backgroundColor='dark-000' paddingX='4' maxW='full'>
            <Header />
            <Dashboard />
          </Container>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  </QueryClientProvider>
)

export default App
