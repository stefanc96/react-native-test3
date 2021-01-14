import React from 'react';
import {StyleSheet, View} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import theme from '../../theme';

const {colors} = theme;

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <RadialGradient
        style={styles.bar}
        colors={['#B1FBFF', '#00DEEB']}
        radius={61}
        center={[0, 4]}
        stops={[0, 1]}
      />
      <View style={styles.grayBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  bar: {
    width: 61,
    height: 8,
  },
  grayBar: {
    flex: 1,
    backgroundColor: colors.primaryDark,
    opacity: 0.05,
  },
});

export default ProgressBar;
