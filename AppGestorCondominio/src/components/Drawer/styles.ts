import {StyleSheet} from 'react-native';

// @ts-ignore
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  img: {
    width: 80,
    height: 60,
  },
  txtImage: {
    color: '#8B63E7',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scroll: {
    flex: 1,
  },
  btnArea: {
    margin: 10,
  },
  btn: {
    backgroundColor: '#8B63E7',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoArea: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {},
  txtArea: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B63E7',
  },
  settings: {},
  btnMenu: {
    flexDirection: 'row',
    marginBottom: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  txtMenu: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#8B63E7',
  },
  menuView: {
    width: 5,
    height: 35,
    marginRight: 5,
    backgroundColor: 'transparent',
    borderTopRightRadius: 5,
    borderbottomRightRadius: 5,
  },
});
