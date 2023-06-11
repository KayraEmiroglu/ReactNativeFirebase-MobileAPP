import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { styles } from './styles';

export default function CustomButton({
  onPress,
  text,
  type = 'primary',
  iconName,
  bgColor,
  fgColor
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {}
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {iconName && (
          <Icon 
            name={iconName} 
            size={20} 
            color={fgColor || '#000'} 
            style={{ marginRight: 10 }} 
          />
        )}
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? { color: fgColor } : {}
          ]}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
}