import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: colors.$lightPurple,
    paddingBottom: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.$white,
  },
});

export default styles;
