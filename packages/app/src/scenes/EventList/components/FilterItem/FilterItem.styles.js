import { StyleSheet } from 'react-native';

import colors from '../../../../theme/colors';

export default StyleSheet.create({
  container: {
    width: 104,
    height: 36,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeContainer: {
    width: 104,
    height: 36,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.$primary,
  },
  defaultContainer: {
    width: 104,
    height: 36,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.$primary,
  },
  title: {
    fontSize: 14,
    letterSpacing: 0.5,
  },
  activeTitle: {
    fontSize: 14,
    letterSpacing: 0.5,
    color: colors.$white,
  },
  defaultTitle: {
    fontSize: 14,
    letterSpacing: 0.5,
    color: colors.$primary,
  },
});
