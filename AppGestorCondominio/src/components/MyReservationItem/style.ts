import {StyleSheet} from 'react-native';

// @ts-ignore
export default styles = StyleSheet.create({
  area: {
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  image: {
    width: 'auto',
    height: 150,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginBottom: 10,
  },
  infoArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  info: {
    color: '#9c9db9',
  },
  date: {
    color: '#000',
    marginBottom: 15,
  },
  btn: {
    margin: 20,
  },
});
