import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.$facebook,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 50,
  },
  label: {
    color: colors.$facebook,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
