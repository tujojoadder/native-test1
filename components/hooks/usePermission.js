import {useState, useEffect, useCallback} from 'react';
import {Alert, Linking} from 'react-native';
import {request, check, RESULTS} from 'react-native-permissions';

const usePermission = permissionType => {


  const [permissionStatus, setPermissionStatus] = useState(null);
  useEffect(() => {
    const checkPermissionStatus = async () => {
      try {
        const status = await check(permissionType);
        setPermissionStatus(status);
      } catch (error) {
        console.error('Error checking permission:', error);
      }
    };
  
    checkPermissionStatus();
  }, [permissionType]);
  

  //handling block status
  useEffect(() => {
    if (permissionStatus === RESULTS.BLOCKED) {
      Alert.alert(
        'Permission Blocked',
        'You have blocked this permission. Please go to settings and enable it to use this feature.',
        [
          {
            text: 'Cancel',
            onPress: () => {
              setPermissionStatus(null);
            },
          },
          {
            text: 'Go to settings',
            onPress: () => {
              Linking.openSettings();
            },
          },
        ],
        {cancelable: false},
      );
    }
  }, [permissionStatus]);

  const checkAndRequestPermission = async () => {
    try {
      if (permissionStatus === RESULTS.GRANTED) {
        return permissionStatus;
      }
      const status = await request(permissionType);
      setPermissionStatus(status);
      return status;
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };


  

  return {permissionStatus, checkAndRequestPermission};
};

export default usePermission;
