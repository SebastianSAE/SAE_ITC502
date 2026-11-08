import { StyleSheet } from 'react-native';

export const COLORS = {
  background: '#A3C2F4',
  blackgray: '#596574',
  whitegray: '#979AA0',
  black: '#000000',
  white: '#FFFF',
  card: '#ECF4FC'
};

export const FONTS = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  bold: 'Inter_700Bold',
};

export const SIZES = {
  heading: 24,
  subheading: 18,
  body: 16,
  small: 14,
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24,
    justifyContent: 'center',
    gap: 10,
  },

  headingContainer: {
    gap: 15,
    alignItems: 'center',
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.heading,
    color: COLORS.black,
  },

  subtitle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.subheading,
    color: COLORS.black,
  },

  formContainer: {
    gap: 15,
  },

  label: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.black,
  },

  footerContainer: {
    alignItems: 'center',
  },

  footerText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.blackgray,
    textDecorationLine: 'underline',
  },

  progressBar: {
    width: '75%',
    height: 12,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    overflow: 'hidden',
  },

  progress: {
    height: '100%',
    backgroundColor: COLORS.black,
    borderRadius: 10,
  },

  loadingText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.black,
    marginTop: 12,
  },

  imageHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  },


});