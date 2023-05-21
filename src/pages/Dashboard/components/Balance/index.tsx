import { AddIcon, Button, HStack, Skeleton, Text } from 'native-base'
import { useCallback, useState } from 'react'

import { Card } from 'components-ui'
import { useGetBalance, useGetSpending } from 'services'
import { formatCurrency, getRenderState } from 'utils'

import Form from './Form'

const getBalanceColor = (value: number) => {
  if (value > 0) {
    return 'green'
  }

  if (value < 0) {
    return 'red'
  }

  return 'grey'
}

const Balance = () => {
  const { data: spending } = useGetSpending()
  const { data, isFetched, isError } = useGetBalance()
  const [formVisibility, setFormVisibility] = useState(false)

  const currentBalance = useCallback(() => {
    if (data && spending) {
      return data?.value - spending?.total
    }

    return 0
  }, [spending, data])

  return (
    <Card>
      <HStack justifyContent='space-between'>
        <Text fontSize='md'>Corrente</Text>
        <Button
          size='sm'
          backgroundColor='dark-100'
          borderWidth='1'
          width='10'
          height='10'
          borderRadius='full'
          borderColor='primary-100'
          onPress={() => setFormVisibility(true)}
        >
          <AddIcon size={4} color='primary-100' />
        </Button>
      </HStack>
      {{
        view: !!data && (
          <>
            <Text fontSize='2xl' fontWeight='600'>
              {formatCurrency(data.value)}
            </Text>
            <Text fontSize='md' fontWeight='600' color={getBalanceColor(currentBalance())}>
              {formatCurrency((currentBalance()))}
            </Text>
          </>
        ),
        loading: <Skeleton h="40" />,
        error: 'Error',
        empty: 'Vazio'
      }[getRenderState(isFetched, isError, data)]}
      {data && (
        <Form
          isOpen={formVisibility}
          onClose={() => setFormVisibility(false)}
        />
      )}
    </Card>
  )
}

export default Balance
