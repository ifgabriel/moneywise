import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  Select,
  Text,
  VStack
} from 'native-base'
import { useForm } from 'react-hook-form'

import { SpendingType } from 'domain'
import CurrencyInput from 'react-native-currency-input'
import { useEditSpending } from 'services'

interface FormProps {
  isOpen: boolean,
  onClose: () => void,
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

type FormValues = { type: SpendingType, value: number }

const Form = ({ isOpen, onClose }: FormProps) => {
  const { mutate } = useEditSpending()
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      type: 'fixedExpenses',
      value: 0,
    }
  })

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        onClose()
        reset()
      }
    })
  }

  return (
    <Modal isOpen={isOpen} style={{ marginTop: -150 }}>
      <Modal.Content>
        <Modal.Header>Adicionar Gasto</Modal.Header>
        <Modal.CloseButton onPress={onClose} />
        <VStack space={6} padding={4}>
          <InputGroup w={{ base: '86%' }}>
            <InputLeftAddon children={'R$'} />
            <CurrencyInput
              onChangeValue={(value) => setValue('value', value ?? 0)}
              renderTextInput={(props) => (
                <Input
                  {...props}
                  {...register('value')}
                  w={{ base: '100%' }}
                  height={10}
                />
              )}
              delimiter='.'
              separator=','
              placeholder='Valor'
              precision={2}
              value={watch('value')}
            />
          </InputGroup>
          <Select
            height={10}
            defaultValue='fixedExpenses'
            _actionSheetBody={{ scrollEnabled: false }}
            onValueChange={(value: string) => setValue('type', value)}
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
              borderWidth='1'
              borderColor='primary-100'
              backgroundColor='dark-100'
            >
              <Text color='primary-100'>Cancelar</Text>
            </Button>
          </HStack>
        </VStack>
      </Modal.Content>
    </Modal >
  )
}

export default Form
