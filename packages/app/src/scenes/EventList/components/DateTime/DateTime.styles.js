import { StyleSheet } from 'react-native';

import colors from '../../../../theme/colors';

export default StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    alignItems: 'center',
    borderRadius: 20,
  },
  dateContainer: {
    width: 58,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: colors.$secondary,
  },
  timeNumber: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.$text,
  },
  timeNow: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.$green,
  },
});
