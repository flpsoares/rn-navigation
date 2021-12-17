import React from 'react'

import { View, Text } from 'react-native'

import { useRoute, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../RootStackParams'

export const Information: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Information'>>()

  return (
    <View>
      <Text>Nome: {route.params?.name}</Text>
      <Text>Telefone: {route.params?.tel}</Text>
    </View>
  )
}
