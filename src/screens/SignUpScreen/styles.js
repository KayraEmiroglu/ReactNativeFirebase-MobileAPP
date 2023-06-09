import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10
  },
  container_primary: {
    backgroundColor: '#3b71f3'
  },
  container_link: {
    backgroundColor: '#fff'
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  text_primary: {},
  text_link: {
    color: 'grey'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
    marginTop: 50
  },
  terms: {
    color: 'grey',
    marginVertical: 10
  },
  link: {
    color: '#fdb075'
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  input: {
    flex: 1,
    padding: 10,
    margin: 5,
  },
  hintText: {
    color: 'red',
    marginLeft: 10
  }

});
