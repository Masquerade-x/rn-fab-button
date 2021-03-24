import React, { useState} from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FloatingButton({
  noOfButtons,
  icons,
  onPress,
  size,
  iconColor,
  toggleBtnSize,
  toggleButtonStyle,
  width,
  height,
  buttonBgColor,
}) {
  let open = 0;
  let buttons = [];
  const animation = useState(new Animated.Value(0))[0];

  function toggleButton() {
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue: toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    open = !open;
  }

  function showButtons(
    noOfButtons,
    icons,
    onPress,
    size,
    iconColor,
    width,
    height,
    buttonBgColor,
  ) {
    for (let i = noOfButtons - 1; i >= 0; i--) {
      buttons.push(
        <TouchableOpacity
          style={[
            color,
            {
              marginBottom: 15,
              backgroundColor: buttonBgColor,
              borderRadius: 50,
            },
          ]}
          onPress={onPress}>
          <Animated.View
            style={[
              {
                width: width,
                height: height,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              },
              rotation,
            ]}>
            <Icon name={icons[i]} size={size} color={iconColor} />
          </Animated.View>
        </TouchableOpacity>,
      );
    }
    return buttons;
  }

  const color = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -1],
        }),
      },
    ],
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  return (
    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
    {showButtons(
        noOfButtons,
        icons,
        onPress,
        size,
        iconColor,
        width,
        height,
        buttonBgColor,
      )}
      <TouchableOpacity
        onPress={() => toggleButton(noOfButtons, icons, onPress)}>
        <Animated.View style={[styles.mainBtn, toggleButtonStyle, rotation]}>
          <Icon name="plus" size={toggleBtnSize} color={iconColor} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  mainBtn: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});