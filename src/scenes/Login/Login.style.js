import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    backgroundColor: colors.$lightPurple
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.$white
  },
  input: {
    marginTop: 20
  }
});

export default styles;
