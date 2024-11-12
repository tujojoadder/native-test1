// ReduxCounter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './ReduxSlice';
import { View, Text, Button, StyleSheet } from 'react-native';

export function Redux() {
  const count = useSelector((state) => state.home.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button
        title="Increment"
        onPress={() => dispatch(increment())}
      />
      <Text style={styles.counterText}>{count}</Text>
      <Button
        title="Decrement"
        onPress={() => dispatch(decrement())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 32,
    marginVertical: 16,
  },
});
