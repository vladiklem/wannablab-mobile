/* eslint-disable */
import { StyleSheet } from 'react-native';

import colors from '../../../../theme/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 140,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: 'rgba(55, 163, 242, 0.2)',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginBottom: 10,
  },
  title: {
    marginVertical: 18,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.6,
    color: colors.$text,
  },
  description: {
    width: 180,
    fontSize: 14,
    letterSpacing: 0.6,
    color: colors.$black,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    width: 96,
    height: 35,
    borderRadius: 50,
    marginVertical: 15,
  },
  leftContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
});
