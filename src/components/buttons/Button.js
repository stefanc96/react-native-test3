import React from 'react';
import {Pressable, Text} from 'react-native';

const Button = ({title, style, textStyle, onPress}) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={[textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
