import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image
} from 'react-native'

export default ({ setInterest, interest, chosenInterests }) => {

  const ActiveClass = chosenInterests.indexOf(interest.title) > -1 ?
  { opacity: 0.8 } :
  { opacity: 0.4 }

  console.log(chosenInterests)
  return (
    <TouchableHighlight
      style={styles.row}
      onPress={() => {
        setInterest(interest.title)
      }}
    >

      <View>
        <Image
          style={[ styles.tileImage, ActiveClass ]}
          source={{ uri: interest.picUrl }}
        />
        <Text style={styles.subTitle}>{interest.title}</Text>
      </View>

    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  tileImage: {
    height: 150
  },
  subTitle: {
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'transparent'
  },
  row: {
    width: 180,
    margin: 5,
    height: 150,
    backgroundColor: '#257AC4'
  }
})
