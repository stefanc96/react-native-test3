import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import theme from '../../theme';
import Button from './Button';

const {colors, fonts} = theme;

const GradientButton = ({title, onPress, isDisabled}) => {
  if (isDisabled) {
    return (
      <Button
        textStyle={[styles.inactiveText, fonts.fontStyles.button]}
        style={[styles.container, styles.button]}
        title={title}
      />
    );
  }
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <RadialGradient
        colors={['#00DEEB', '#00EAAE', '#00EAAC']}
        stops={[0, 0.5, 1]}
        radius={500}
        center={[0, 40]}
        style={styles.button}>
        <Text style={[styles.activeText, fonts.fontStyles.button]}>
          {title}
        </Text>
      </RadialGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: 'red',
    width: '100%',
    alignSelf: 'center',
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeText: {
    color: 'white',
  },
  inactiveText: {
    color: colors.primaryDark,
    opacity: 0.4,
  },
});

GradientButton.defaultProps = {
  isDisabled: true,
};

export default GradientButton;
