import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 10,
    fontSize: 20,
    borderRadius: 5,
    color: 'green',
  },
  button: {
    margin: 20,
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  statusText: {
    margin: 20,
    padding: 10,
  },
});

export default styles;
