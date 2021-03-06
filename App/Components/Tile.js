import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native'

const icon = require('../Assets/Icons/attending.png')

export default (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={props.linkRoute}
    >
      <View style={styles.mainContainer}>
        <Image source={{ uri: props.event.imageUrl }} style={styles.image} />

        <View style={styles.topInfoContainer}>
          <Text style={styles.eventTitle}>{props.event.title}</Text>
          <View style={styles.attendingContainer}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.attending}>{props.event.attending.length}</Text>
          </View>
        </View>

        <View style={styles.bottomInfoContainer}>
          <Text style={styles.address}>{props.event.address}</Text>
          <TouchableHighlight
            onPress={props.linkRoute}
            style={styles.detailsButton}
            underlayColor={'#17c7ff'}
          >
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    // margin: 20,
    backgroundColor: '#257AC4',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 30,
    height: 260
  },
  topInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -40
  },
  eventTitle: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 18,
    backgroundColor: 'transparent'
  },
  attendingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginRight: 18,
    height: 24
  },
  image: {
    height: 200,
    opacity: 0.8
  },
  attending: {
    color: '#fff',
    fontSize: 24,
    backgroundColor: 'transparent'
  },
  icon: {
    height: 18,
    width: 18,
    marginRight: 8,
    bottom: 0,
    backgroundColor: 'transparent'
  },
  bottomInfoContainer: {
    marginLeft: 18,
    marginTop: 12,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  address: {
    fontSize: 16,
    color: '#fff'
  },
  detailsButton: {
    width: 100,
    height: 60,
    backgroundColor: '#cee8fe',
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsButtonText: {
    color: '#04396c',
    fontSize: 16,
    fontWeight: '500'
  }
})
