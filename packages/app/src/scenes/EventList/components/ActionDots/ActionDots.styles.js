import { StyleSheet } from 'react-native';

import colors from '../../../../theme/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 15,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 20,
    height: 10,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 100,
    backgroundColor: colors.$primary,
  },
});
