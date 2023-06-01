import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style';
import moment from 'moment';

//create a card with the wound information
const WoundCard = ({ wound, onPress  }) => {

  const formattedDate = moment(wound.createdAt).format('DD/MM/YYYY');
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: wound.photoUrl }} />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Location: {wound.location}</Text>
        <Text style={styles.infoText}>Date: {formattedDate}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default WoundCard;
