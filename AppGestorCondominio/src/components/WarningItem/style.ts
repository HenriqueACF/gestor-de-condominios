import {StyleSheet} from 'react-native';

// @ts-ignore
export default styles = StyleSheet.create({
  btn: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#e8e9ed',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  txtData: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9c9db9',
    marginBottom: 10,
  },
  txtTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  statusArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  txtStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9c9db9',
    marginBottom: 10,
    marginLeft: 10,
  },
  areaPhoto: {
    flexDirection: 'row',
  },
  photoItem: {
    marginRight: 10,
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 5,
  },
  modalArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  modalImage: {
    flex: 1,
  },
  btnClose: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 20,
    right: 10,
  },
});
