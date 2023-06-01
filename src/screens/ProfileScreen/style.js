import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 24,
    },
    label: {
      alignSelf: 'flex-start',
      marginLeft: 8,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    imageWrapper: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#ddd',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
    placeholderImage: {
      color: '#999',
    },
  });
  