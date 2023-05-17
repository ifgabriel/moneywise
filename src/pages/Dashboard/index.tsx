import { useState } from 'react'
import { ScrollView } from 'react-native'
import { Text, Button, AddIcon, HStack, Heading, Box } from 'native-base'

import { Card, Portfolio, Form } from '../../components-ui'

const Dashboard = () => {
  const [formVisibility, setFormVisibility] = useState(false)

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
        <Text fontSize='2xl' fontWeight='600'>
          R$10.713,95
        </Text>
        <Text fontSize='lg'>
          + 45,66%
        </Text>
        {formVisibility && <Form onClose={() => setFormVisibility(false)} />}
      </Card>
      <Box paddingY={8}>
        <Heading fontSize='xl' color='white' mb={8}>
          Gastos
        </Heading>
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
      </Box>
    </Box>
  )
}

export default Dashboard
