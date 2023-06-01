import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment';

const WoundDetails = ({ route }) => {
  const { wound } = route.params;
  const formattedDate = moment(wound.createdAt).format('DD/MM/YYYY');

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: wound.photoUrl }} />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Location: {wound.location}</Text>
        <Text style={styles.infoText}>Date: {formattedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default WoundDetails;




