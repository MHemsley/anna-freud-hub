import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'

export default () => {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.tile}>
          <Image
          style={styles.tileImage}
          source={{ uri: 'http://www.fillmurray.com/150/150' }}
          />
          <Text style={styles.subTitle}>Fun things to do Locally</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.tile}>
          <Image
          style={styles.tileImage}
          source={{ uri: 'http://www.fillmurray.com/150/150' }}
          />
          <Text style={styles.subTitle}>Fun things to do Locally</Text>
        </View>

      </View>
      <View style={styles.horizontalDiv} />
    </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    flex: 20
  },
  tileImage: {
    opacity: 0.8,
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
    flexDirection: 'row'
  },
  divider: {
    flex: 1,
    backgroundColor: 'white'
  },
  horizontalDiv: {
    height: 9,
    backgroundColor: 'white'
  }
})
