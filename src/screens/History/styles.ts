import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  history: {
    padding: 32,
  },
  swipleableContainer: {
    width: '100%',
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    borderRadius: 6,
    height: 90,
    marginBottom: 12
  },
  swipeableRemove: {
    height: 90,
    width: 90,
    borderRadius: 6,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    alignItems: 'center',
    justifyContent: 'center'
  }
});