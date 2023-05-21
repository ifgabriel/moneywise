import { AddIcon, Box, Button, Flex, Heading, Skeleton } from 'native-base'
import { useState } from 'react'
import { ScrollView } from 'react-native'

import { Spent } from 'components-ui'
import { useGetBalance, useGetSpending } from 'services'
import { getPercent, getRenderState } from 'utils'
import Form from './Form'

const Spending = () => {
  const { data: balance } = useGetBalance()
  const { data, isFetched, isError } = useGetSpending()
  const [formVisibility, setFormVisibility] = useState(false)

  return (
    <Box>
      <Flex direction='row' justifyContent='space-between' marginY={8}>
        <Heading fontSize='xl' color='white'>
          Gastos
        </Heading>
        <Button
          size='sm'
          borderRadius='full'
          backgroundColor='dark-100'
          borderWidth='1'
          width='10'
          height='10'
          borderColor='primary-100'
          onPress={() => setFormVisibility(true)}
        >
          <AddIcon size={4} color='primary-100' />
        </Button>
      </Flex>
      <Form isOpen={formVisibility} onClose={() => setFormVisibility(false)} />
      <ScrollView horizontal={true}>
        {{
          view: !!balance?.value && data?.spending.map((spent) => (
            <Spent
              key={spent.type}
              {...spent}
              percent={getPercent(spent.value, balance.value)}
            />
          )),
          loading: <Skeleton h="350" />,
          error: 'Error',
          empty: 'Vazio'
        }[getRenderState(isFetched, isError, data)]}
      </ScrollView>
    </Box>
  )
}

export default Spending
