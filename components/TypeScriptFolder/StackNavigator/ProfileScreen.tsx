import {View, StyleSheet} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './StackNavigator';
import {
  Modal,
  Portal,
  Text,
  IconButton,
  Button,
  PaperProvider,
  Appbar,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({route}: ProfileScreenProps) {
  const {userId} = route.params;

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <Appbar.Header>
        
        <Appbar.BackAction onPress={() => {navigation.goBack()}} />
        <Appbar.Content title="Profile"/>
      </Appbar.Header>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text variant="headlineMedium" style={styles.title}>
        Profile Screen
      </Text>
      <Text>User ID: {userId}</Text>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.fullScreenModal}>
          <View style={styles.modalContent}>
            <IconButton
              icon="close"
              size={24}
              onPress={hideModal}
              style={styles.closeButton}
            />
            <Text variant="headlineSmall" style={styles.modalTitle}>
              Comments
            </Text>
            <Text style={styles.modalText}>
              This is a full-screen modal, similar to a Facebook comment modal.
              Add your comments here.
            </Text>
            {/* Add more content here as needed */}
          </View>
        </Modal>
      </Portal>

      <Button
        mode="contained"
        onPress={showModal}
        style={styles.openModalButton}
        contentStyle={{paddingVertical: 8}}>
        Open Comments
      </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 10,
  },
  fullScreenModal: {
    flex: 1,
    margin: 0, // Remove default modal margins
    backgroundColor: 'white',
  },
  modalContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  openModalButton: {
    marginTop: 30,
    width: '80%',
  },
});
