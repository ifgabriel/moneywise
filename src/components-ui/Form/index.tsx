import { useState } from 'react'
import { Button, Input, Select, Text, HStack, VStack } from 'native-base'

import { useEditValuesAccount } from '../../services'

interface FormProps {
  onClose: () => void
}

const typeOptions = [
  {
    value: 'GASTOS_FIXOS',
    label: 'Gastos Fixos',
  },
  {
    value: 'ENTRETERIMENTO',
    label: 'Entreterimento',
  },
  {
    value: 'ESTUDOS',
    label: 'Estudos',
  },
  {
    value: 'SAUDE',
    label: 'Saúde',
  },
]

const Form = ({ onClose }: FormProps) => {
  const [type, setType] = useState('GASTOS_FIXOS')

  const { mutate } = useEditValuesAccount({ customerId: '11111' })

  return (
    <VStack space={6} marginTop={12}>
      <Input placeholder='Valor' />
      <Select
        selectedValue={type}
        accessibilityLabel='Escolha um tipo'
        placeholder='Escolha um tipo'
        _actionSheetBody={{ scrollEnabled: false }}
        onValueChange={itemValue => setType(itemValue)}
      >
        {typeOptions.map(option => (
          <Select.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Select>
      <HStack direction='row' justifyContent='flex-end' space={4}>
        <Button onPress={onClose} backgroundColor='primary-100'>
          Salvar
        </Button>
        <Button
          onPress={() => mutate()}
          backgroundColor='dark-100'
          borderColor='primary-100'
          borderWidth='1'
        >
          <Text color='primary-100'>Cancelar</Text>
        </Button>
      </HStack>
    </VStack>
  )
}

export default Form
