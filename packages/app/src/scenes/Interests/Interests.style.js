import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: colors.$lightPurple,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.$white,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemName: {
    fontSize: 20,
    color: colors.$white,
  },
  switch: {
    marginHorizontal: 10,
  },
});

export default styles;
