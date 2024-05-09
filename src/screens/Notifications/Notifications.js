import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../../theme/Colors'

import NotificationsCard from '../../components/NotificationsCard'

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NotificationsCard title='Notifications'/>
    </SafeAreaView>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.WHITE
}

})
