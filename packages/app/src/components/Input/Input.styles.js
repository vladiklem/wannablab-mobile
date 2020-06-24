import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    height: 48,
    width: '100%',
    backgroundColor: colors.$white,
    borderRadius: 4,
    paddingLeft: 10,
    fontSize: 25,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
  },
});
