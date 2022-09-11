import {StyleSheet} from 'react-native';

// @ts-ignore
export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#e8e9ed',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  headerArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoArea: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9c9d9b',
  },
  txtAviso: {
    fontSize: 15,
    color: '#000',
    margin: 10,
  },
  footer: {
    flexDirection: 'row',
  },
  txtBtn: {
    fontSize: 13,
    color: '#9c9d9b',
  },
});
