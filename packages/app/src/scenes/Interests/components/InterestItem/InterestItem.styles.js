import { StyleSheet } from 'react-native';

import colors from '../../../../theme/colors';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
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
