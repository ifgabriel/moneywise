import { Button, Input, Text, HStack, VStack } from 'native-base'

import { useEditBalance } from '../../../../services'
import { useForm } from 'react-hook-form'

interface FormProps {
  onClose: () => void,
  value?: number
}

const typeOptions = [
  {
    value: 'fixedExpenses',
    label: 'Gastos Fixos',
  },
  {
    value: 'entertainment',
    label: 'Entreterimento',
  },
  {
    value: 'studies',
    label: 'Estudos',
  },
  {
    value: 'food',
    label: 'Alimentação',
  },
  {
    value: 'health',
    label: 'Saúde',
  },
]

const SpendingForm = ({ value = 0, onClose }: FormProps) => {
  const { mutate } = useEditBalance()
  const { handleSubmit, setValue } = useForm({
    defaultValues: { value }
  })

  const onSubmit = (data: { value: number }) => {
    mutate(data, { onSuccess: onClose })
  }

  return (
    <VStack space={6} marginTop={12}>
      <Input placeholder='Valor' height={10} onChangeText={(value) => setValue('value', Number(value))} />
      <Select
        height={10}
        accessibilityLabel='Escolha um tipo'
        placeholder='Escolha um tipo'
        _actionSheetBody={{ scrollEnabled: false }}
        onValueChange={(itemValue: string) => setValue('type', itemValue)}
      >
        {typeOptions.map(option => (
          <Select.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Select>
      <HStack direction='row' justifyContent='flex-end' space={4}>
        <Button onPress={handleSubmit(onSubmit)} backgroundColor='primary-100'>
          Salvar
        </Button>
        <Button
          onPress={onClose}
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

export default SpendingForm
