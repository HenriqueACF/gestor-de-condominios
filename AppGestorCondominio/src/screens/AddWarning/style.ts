import {StyleSheet} from 'react-native';

// @ts-ignore
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  txt: {
    color: '#8B63E7',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    fontSize: 15,
    margin: 5,
  },
  photoArea: {},
  btnIcon: {
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B63E7',
    borderRadius: 5,
  },

  btn: {
    alignSelf: 'center',
    backgroundColor: '#8B63E7',
    borderWidth: 2,
    borderColor: '#8B63E7',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
    width: '95%',
  },
  txtBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  photoItem: {
    width: 65,
    borderWidth: 1,
    borderColor: '#8B63E7',
    borderRadius: 5,
    paddingBottom: 5,
    marginLeft: 5,
    alignItems: 'center',
  },
  image: {
    width: 63,
    height: 63,
    marginBottom: 5,
    borderRadius: 5,
  },
  btnDel: {},
});
