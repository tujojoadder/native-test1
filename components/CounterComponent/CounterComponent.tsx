import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../src/store'; // Adjust the path accordingly
import { increment,decrement, incrementByAmount } from '../Redux/ReduxSlice';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Counter = () => {
  const count = useSelector((state: RootState) => state.home.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
        <Button
          title="Increment by 5"
          onPress={() => dispatch(incrementByAmount(5))}
        />
      </View>

      <ActivityIndicator animating={true} color={MD2Colors.blueGrey800} size="large"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    gap: 10,
  },
});

export default Counter;
