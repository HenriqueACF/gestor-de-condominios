import {StyleSheet} from 'react-native';

// @ts-ignore
export default styles = StyleSheet.create({
  container: {},
  image: {
    height: 150,
  },
  loading: {
    marginTop: 20,
  },
  calendarArea: {
    margin: 15,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    color: '#000',
  },
  timeList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 5,
    backgroundColor: `${props => (props.active ? '#8863e6' : 'transparet')}`,
    padding: 10,
  },
  txt: {
    color: `${props => (props.active ? '#fff' : '#000')}`,
    fontSize: 14,
  },
  btnReserva: {
    backgroundColor: '#8863e6',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtReserva: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
