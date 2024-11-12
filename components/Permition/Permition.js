import React, {useState} from 'react';
import {View, Button, Image, StyleSheet, Alert, Text} from 'react-native';
import usePermission from '../hooks/usePermission';
import {RESULTS} from 'react-native-permissions';
import {launchCamera} from 'react-native-image-picker';
import {permission} from '../utils/permissions';
import {Platform} from 'react-native';
import {PERMISSIONS} from 'react-native-permissions';

const PermissionExample = () => {
  // Separate instances of the hook for each permission type
  const {checkAndRequestPermission: requestCameraPermission} = usePermission(
    permission.camera,
  );
  const {checkAndRequestPermission: requestStoragePermission} = usePermission(
    permission.storage,
  );
  const {checkAndRequestPermission: requestWriteStoragePermission} =
    usePermission(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);

  const captureImage = async () => {
    // Request camera permission
    const cameraStatus = await requestCameraPermission();
    if (cameraStatus === RESULTS.GRANTED) {
      console.log('image capute');
    }
  };

  const requestStorage = async () => {
    console.log(Platform.Version);

    if (Platform.OS === 'android' && Platform.Version <= 28) {
      // For Android versions below 30 (pre-Scoped Storage)
      const storageStatus = await requestStoragePermission();
      const writeStorageStatus = await requestWriteStoragePermission();

      console.log(storageStatus);
      console.log(writeStorageStatus);
      if (
        storageStatus === RESULTS.GRANTED &&
        writeStorageStatus === RESULTS.GRANTED
      ) {
        console.log('Both storage permissions granted');
      }
    } else {
      // For Android 10+ (Scoped Storage) and above, request only READ_EXTERNAL_STORAGE
      const storageStatus = await requestStoragePermission();
      if (storageStatus === RESULTS.GRANTED) {
        console.log('Storage permission granted');
      }
    }
  };

  return (
    <View style={styles.centeredContent}>

      <Button title="Capture Image" onPress={captureImage} />
      <Text />
      <Button title="Request Storage" onPress={requestStorage} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  selectedImage: {
    marginBottom: 20,
    height: 300,
    width: 300,
    borderRadius: 16,
  },
  permissionStatusText: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default PermissionExample;
