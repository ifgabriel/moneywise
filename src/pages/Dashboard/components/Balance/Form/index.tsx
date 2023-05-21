import { Button, HStack, Input, InputGroup, InputLeftAddon, Modal, Text, VStack } from 'native-base'
import { useForm } from 'react-hook-form'
import CurrencyInput from 'react-native-currency-input'
import { useEditBalance } from 'services'

interface FormProps {
  isOpen: boolean,
  onClose: () => void,
}

type FormValues = { value: number }

const Form = ({ isOpen, onClose }: FormProps) => {
  const { mutate } = useEditBalance()
  const {
    handleSubmit,
    setValue,
    reset,
    register,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
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
        <Modal.Header>Adicionar Valor</Modal.Header>
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
          <HStack direction='row' justifyContent='flex-end' space={4}>
            <Button onPress={handleSubmit(onSubmit)} backgroundColor='primary-100'>
              Salvar
            </Button>
            <Button
              onPress={onClose}
              borderWidth='1'
              backgroundColor='dark-100'
              borderColor='primary-100'
            >
              <Text color='primary-100'>Cancelar</Text>
            </Button>
          </HStack>
        </VStack>
      </Modal.Content>
    </Modal>
  )
}

export default Form
