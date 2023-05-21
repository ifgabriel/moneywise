import { LinearGradient } from 'expo-linear-gradient'
import { Box, Text } from 'native-base'
import { memo } from 'react'

import { SpendingType } from 'domain'
import { formatCurrency } from 'utils'

interface SpentProps {
  type: SpendingType,
  value: number,
  percent: string
}

const getBackground = (type: SpendingType) => {
  const backgrounds: Record<SpendingType, string[]> = {
    food: ['#F96666', '#C92727'],
    fixedExpenses: ['#167E8C', '#45B8E1'],
    entertainment: ['#FF7955', '#FF5454'],
    studies: ['#8466FA', '#B0A8F6'],
    health: ['#077B5C', '#66FADE'],
  }

  return backgrounds[type] ?? ['#FF7955', '#FEA97B']
}

const getTitle = (type: SpendingType) => {
  const titles: Record<SpendingType, string> = {
    food: 'Alimentação',
    fixedExpenses: 'Gastos Fixos',
    entertainment: 'Entreterimento',
    studies: 'Estudos',
    health: 'Saúde',
  }

  return titles[type] ?? 'Gasto'
}

const Spent = ({ type, value, percent }: SpentProps) => (
  <LinearGradient
    style={{
      borderRadius: 24,
      overflow: 'hidden',
      maxHeight: 400,
      marginRight: 30,
      width: 250,
    }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    colors={getBackground(type)}>
    <Box
      padding='24px'
      height='400px'
      width='250px'

      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='flex-end'
      >
        <Box>
          <Text fontSize='2xl' color='white'>
            {getTitle(type)}
          </Text>
        </Box>
      </Box>
      <Box
        padding='8px'
        borderRadius='8px'
        backgroundColor='#FFFFFF29'
      >
        <Text fontSize='2xl' color='white'>
          {formatCurrency(value)}
        </Text>
        <Text fontSize='xl' color='white'>
          {percent}
        </Text>
      </Box>
    </Box>
  </LinearGradient>
)

export default memo(Spent)
