import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import React, { useState } from 'react';

export default function ActivityIndicators() {
  const [show, setShow] = useState(false);
  
  const handleClick = () => {  // Declare using const
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  
  return (
    <View style={styles.main}>
      {show && <ActivityIndicator size={'small'} />}
      
      <View style={{ marginTop: 10 }}>
        <Button title="Press Me" onPress={handleClick} />
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
});
