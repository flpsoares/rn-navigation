import React from 'react'

import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../RootStackParams'

import { styles } from './style'
import data from '../../data.json'

type ScreenProp = StackNavigationProp<RootStackParamList, 'Contacts'>

export const Contacts: React.FC = () => {
  const navigation = useNavigation<ScreenProp>()

  return (
    <View style={styles.container}>
      {data.map((contact) => {
        return (
          <View key={contact.id} style={styles.contact}>
            <Text style={styles.text}>Nome: {contact.name}</Text>
            <Text style={styles.text}>Telefone: {contact.tel}</Text>
            <Text
              style={styles.navButton}
              onPress={() =>
                navigation.navigate('Information', {
                  name: contact.name,
                  tel: contact.tel
                })
              }
            >
              Information...
            </Text>
          </View>
        )
      })}
    </View>
  )
}
