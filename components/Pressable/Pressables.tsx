import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';

export default function Pressables() {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true, // Start handling gestures
      onPanResponderMove: (evt, gestureState) => {
        console.warn('Finger is moving!', gestureState.moveX, gestureState.moveY);
      },
      onPanResponderRelease: () => {
        console.warn('Press Released');
      },
    })
  ).current;

  return (
    <View style={styles.main}>
      <View
        {...panResponder.panHandlers}
        style={styles.pressable}
      >
        <Text style={styles.text}>Drag or Move Me</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    width: 200,
    height: 100,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    elevation: 5,
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
});
