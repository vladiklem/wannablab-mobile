import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.$white,
  },
  contentContainer: {
    position: 'absolute',
    top: 160,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    color: colors.$text,
  },
  input: {
    width: 300,
    marginTop: 20,
    color: colors.$text,
  },
  topImage: {
    position: 'absolute',
    top: 80,
    left: 0,
    zIndex: 1,
    resizeMode: 'cover',
  },
  bottomImage: {
    position: 'absolute',
    top: 10,
    left: 0,
    zIndex: 0,
    resizeMode: 'cover',
  },
  link: {
    marginVertical: 30,
    fontSize: 14,
    color: colors.$text,
    textDecorationLine: 'underline',
  },
  buttonWrapper: {
    flex: 1,
    width: 300,
  },
});

export default styles;
