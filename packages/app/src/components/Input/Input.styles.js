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
    overflow: 'hidden',
  },
  inputGroup: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 12,
  },
  input: {
    width: '80%',
    fontSize: 16,
    color: colors.$text,
  },
});
