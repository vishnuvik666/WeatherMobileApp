import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  someViewWrapper: {
    borderWidth: 2,
    marginTop: 100,
    height: 400,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  detailText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 6,
  },
  ViewDetailsBtn: {
    width: 50,
    height: 50,
    marginTop: 30,
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  ViewDetailsText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
