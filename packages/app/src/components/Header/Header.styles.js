/* eslint-disable */

import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(55, 163, 242, 0.2)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.$title,
  },
});
