import { useState } from 'react'
import { ScrollView } from 'react-native'
import { Text, Button, AddIcon, HStack, Heading, Box, Skeleton } from 'native-base'
import { useGetBalance, useGetSpending } from '../../services'

import { Card, Portfolio } from '../../components-ui'
import { getRenderState, formatCurrency } from '../../utils'
import BalanceForm from './components/BalanceForm'

const Dashboard = () => {
  const [formVisibility, setFormVisibility] = useState(false)
  const { data: spending, isFetched: spendingFetched, isError: spendingError } = useGetSpending()
  const { data: balance, isFetched: balanceFetched, isError: balanceError } = useGetBalance()

  const committedMoney = (): number => {
    if (!!spending) {
      delete spending._id

      return Object.values(spending)?.reduce((acc, value) => acc + value)
    }

    return 0
  }

  const getPercent = (value: number): string => {
    const percent = ((value / balance?.value) * 100).toFixed(2)

    return percent + '%'
  }

  return (
    <Box>
      <Card>
        <HStack justifyContent='space-between'>
          <Text fontSize='md'>Corrente</Text>
          <Button
            size='sm'
            backgroundColor='dark-100'
            borderWidth='1'
            width='10'
            height='10'
            borderColor='primary-100'
            onPress={() => setFormVisibility(true)}
          >
            <AddIcon size={4} color='primary-100' />
          </Button>
        </HStack>
        {{
          view: !!balance && (
            <>
              <Text fontSize='2xl' fontWeight='600'>
                {formatCurrency(balance.value)}
              </Text>
              <Text fontSize='lg'>
                {(getPercent(committedMoney()))}
              </Text>
            </>
          ),
          loading: <Skeleton h="40" />,
          error: 'Error',
          empty: 'Vazio'
        }[getRenderState(balanceFetched, balanceError, balance)]}
        {formVisibility && <BalanceForm value={balance.value} onClose={() => setFormVisibility(false)} />}
      </Card>
      <Box paddingY={8}>
        <Heading fontSize='xl' color='white' mb={8}>
          Gastos
        </Heading>
        <ScrollView horizontal={true}>
          {{
            view: !!spending && (
              <>
                <Portfolio
                  name='Gastos Fixos'
                  order='first'
                  value={spending.fixedExpenses}
                  percent={getPercent(spending.fixedExpenses)}
                />
                <Portfolio
                  name='Entreterimento'
                  order='second'
                  value={spending.entertainment}
                  percent={getPercent(spending.entertainment)}
                />
                <Portfolio name='Estudos' order='third' value={spending.studies} percent={getPercent(spending.studies)} />
                <Portfolio name='Alimentação' order='fourth' value={spending.food} percent={getPercent(spending.food)} />
                <Portfolio name='Saúde' order='fifth' value={spending.health} percent={getPercent(spending.health)} />
              </>
            ),
            loading: <Skeleton h="350" />,
            error: 'Error',
            empty: 'Vazio'
          }[getRenderState(spendingFetched, spendingError, spending)]}
        </ScrollView>
      </Box>
    </Box>
  )
}

export default Dashboard
