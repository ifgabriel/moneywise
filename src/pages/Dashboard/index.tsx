import { Button } from '@rneui/base'
import { useTheme } from '@rneui/themed'
import { PlusIcon } from 'lucide-react-native'
import { View, ScrollView } from 'react-native'
import { Card, Text, Portfolio } from '../../components-ui'
import styles from './styles.module.scss'

const Dashboard = () => {
  const { theme } = useTheme()
  return (
    <View>
      <Card>
        <View style={styles.DashboardTitle}>
          <Text size='small' color='gray' style={styles.Categorie}>
            Corrente
          </Text>
          <Button type='outline' radius='md'>
            <PlusIcon color={theme.colors['primary-100']} />
          </Button>
        </View>
        <Text size='giant' color='white'>
          R$10.713,95
        </Text>
      </Card>
      <View style={styles.Scroll}>
        <Text size='medium' color='white' weight='bold' style={styles.TitleSection}>
          Categorias
        </Text>
        <ScrollView horizontal={true}>
          <Portfolio
            name='Gastos Fixos'
            abbreviations='GFX'
            value='7.213,05'
            percent='+00.00 (--)'
          />
          <Portfolio
            name='Entreterimento'
            abbreviations='ETTT'
            value='1.595,05'
            percent='+535,00 (45%)'
          />
          <Portfolio name='Estudos' abbreviations='ESD' value='822,00' percent='+50,35 (1.25%)' />
          <Portfolio name='Saúde' abbreviations='SDE' value='525,23' percent='+45,35 (-24.25%)' />
        </ScrollView>
      </View>
    </View>
  )
}

export default Dashboard
