import {Platform} from 'react-native';

const fontFamily = {
  skolarSans: 'Skolar Sans Latn TEST',
  skolarSansExtrabold: 'SkolarSansExtrabold',
  skolarSansBold: 'SkolarSansBold',
  skolarSansRegular: 'SkolarSansRegular',
};

const fontSize = {
  title: 34,
  headline: 28,
  input: 24,
  button: 16,
  smallCaption: 14,
};

const fontStyles = {
  headline: {
    fontSize: fontSize.headline,
    fontWeight: '900',
    fontFamily:
      Platform.OS === 'android'
        ? fontFamily.skolarSansExtrabold
        : fontFamily.skolarSans,
  },
  input: {
    fontSize: fontSize.input,
    paddingBottom: 0,
    textAlignVertical: 'center',
    lineHeight: Platform.OS === 'android' ? 40 : undefined,
    fontFamily:
      Platform.OS === 'android'
        ? fontFamily.skolarSansRegular
        : fontFamily.skolarSans,
    fontWeight: '400',
  },
  button: {
    fontSize: fontSize.button,
    fontFamily:
      Platform.OS === 'android'
        ? fontFamily.skolarSansBold
        : fontFamily.skolarSans,
    fontWeight: '700',
  },
  title: {
    fontSize: fontSize.title,
    lineHeight: 34,
    textAlignVertical: 'bottom',
    fontWeight: '900',
    fontFamily:
      Platform.OS === 'android'
        ? fontFamily.skolarSansExtrabold
        : fontFamily.skolarSans,
  },
  caption: {
    fontSize: fontSize.button,
    fontFamily:
      Platform.OS === 'android'
        ? fontFamily.skolarSansRegular
        : fontFamily.skolarSans,
    fontWeight: '400',
  },
  smallCaption: {
    fontSize: fontSize.smallCaption,
    fontFamily:
      Platform.OS === 'android'
        ? fontFamily.skolarSansRegular
        : fontFamily.skolarSans,
    fontWeight: '400',
  },
};

export default {
  fontFamily,
  fontSize,
  fontStyles,
};
