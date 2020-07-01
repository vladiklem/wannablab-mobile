import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.$white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: colors.$white,
    fontWeight: 'bold',
  },
});
