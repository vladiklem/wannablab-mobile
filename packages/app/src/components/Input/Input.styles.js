import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    borderColor: colors.$white,
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft: 10,
    fontSize: 25,
    justifyContent: 'center'
  },
  input: {
    fontSize: 16,
    color: colors.$white
  }
});
