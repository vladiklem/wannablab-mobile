import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    height: 40,
    marginTop: 20,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: colors.$white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 16,
    color: colors.$white,
    fontWeight: 'bold'
  }
});
