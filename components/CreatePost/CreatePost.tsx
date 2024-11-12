import React, { useEffect, useState } from "react";
import { View, TextInput, Button, TouchableOpacity, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from "react-redux";
import * as ImagePicker from 'react-native-image-picker';
import { useUserPostInsertMutation } from "../../src/services/profileApi";
import echo from "../../echo";

export default function CreatePost() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [textValue, setTextValue] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(40);
  const [message, setMessage] = useState("");
  const [showResetButton, setShowResetButton] = useState(false);
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [audience, setAudience] = useState('public');

  const [userPostInsert, { isLoading }] = useUserPostInsertMutation();
  const dispatch = useDispatch();

  const handleSelectChange = (value) => {
    setAudience(value);
  };

  const handleFileInputChange = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: 'photo', selectionLimit: 1 }, 
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setSelectedFile(response.assets[0].uri);
          setMessage('Image selected');
          setShowResetButton(true);
        }
      }
    );
  };

  const handleTextChange = (text) => {
    setTextValue(text);
    setTextareaHeight(Math.min(text.split('\n').length * 20, 80)); // Adjust for multiple lines
    setShowResetButton(text.trim() !== "" || selectedFile !== null);
  };

  const handleReset = () => {
    setTextValue("");
    setSelectedFile(null);
    setMessage("");
    setShowResetButton(false);
    setIsTextAreaFocused(false);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("text", textValue);
    formData.append("audience", audience);

    if (selectedFile) {
      formData.append("image", { uri: selectedFile, type: 'image/jpeg', name: 'post-image.jpg' });
      formData.append("image_or_text", "image");
    } else {
      formData.append("image_or_text", "text");
    }

    try {
      const res = await userPostInsert(formData);
      if (res.data) {
        handleReset();
      } else if (res.error) {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isPostButtonEnabled = textValue.trim() !== "" || selectedFile !== null;




// Inside your component or function
useEffect(() => {
  const channel = echo.private("broadcast-comment");

  channel.listen(".getComment", (e) => {
    console.log(e);
  });

  return () => {
    echo.leave("broadcast-comment");
  };
}, []);

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <TextInput
          placeholder="What's happening?"
          value={textValue}
          onChangeText={handleTextChange}
          multiline={true}
          onFocus={() => setIsTextAreaFocused(true)}
          onBlur={() => setIsTextAreaFocused(false)}
          style={[
            styles.textarea,
            {  borderColor: isTextAreaFocused ? "#1682e8" : "#E0E0E0" ,maxHeight:150},
          ]}
        />

        {selectedFile && (
          <Image source={{ uri: selectedFile }} style={styles.selectedImage} />
        )}

        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={handleFileInputChange}>
            <Text style={styles.icon}>📷</Text>
          </TouchableOpacity>

          <Picker
            selectedValue={audience}
            style={styles.picker}
            onValueChange={(itemValue) => handleSelectChange(itemValue)}
          >
            <Picker.Item label="Public" value="public" />
            <Picker.Item label="Private" value="private" />
            <Picker.Item label="Only Me" value="only_me" />
          </Picker>

          {showResetButton && (
            <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
              <Text style={styles.resetIcon}>🗑️</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={handleSubmit}
            style={[
              styles.postButton,
              { backgroundColor: isPostButtonEnabled && !isLoading ? "#1682e8" : "#aaa" },
            ]}
            disabled={!isPostButtonEnabled || isLoading}
          >
            {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.postButtonText}>Post</Text>}
          </TouchableOpacity>
        </View>
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f4f7',
  },
  postContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  textarea: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    lineHeight: 20,
    borderRadius: 8,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    textAlignVertical: 'top',
    backgroundColor: '#f8f9fa',
    color: '#333',
  },
  selectedImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    fontSize: 24,
    color: "#1682e8",
    marginRight: 12,
  },
  picker: {
    flex: 1,
    height: 40,
    color: '#1682e8',
  },
  resetButton: {
    paddingHorizontal: 10,
  },
  resetIcon: {
    fontSize: 20,
    color: "#FF5A5A",
  },
  postButton: {
    marginLeft: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1682e8",
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  message: {
    marginTop: 10,
    color: '#555',
    fontSize: 14,
    fontStyle: 'italic',
  },
});
