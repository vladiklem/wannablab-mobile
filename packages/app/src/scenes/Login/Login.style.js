import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    backgroundColor: colors.$white,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.$text,
  },
  input: {
    marginTop: 20,
    color: colors.$text,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default styles;
